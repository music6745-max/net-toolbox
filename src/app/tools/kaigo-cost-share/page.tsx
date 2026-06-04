"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { getKaigoKindleLink } from "@/components/KaigoToolCta";
import { trackEvent } from "@/lib/tracking";

const TOOL_SLUG = "kaigo-cost-share";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=kaigo_cost_share";
const BOOTH_COST_TEMPLATE_URL = "https://kaigo-okane.booth.pm/items/8340354";
const BOOTH_FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";
const KINDLE_LINK = getKaigoKindleLink(TOOL_SLUG);

function yen(value: number) {
  return `Â¥${Math.round(value).toLocaleString()}`;
}

function trackOutbound(eventName: string, position: string, href: string) {
  return () => {
    trackEvent(eventName, {
      page: TOOL_SLUG,
      position,
      url: href.slice(0, 200),
    });
  };
}

export default function KaigoCostSharePage() {
  const [monthlyCare, setMonthlyCare] = useState(65000);
  const [transport, setTransport] = useState(12000);
  const [medical, setMedical] = useState(8000);
  const [other, setOther] = useState(5000);
  const [parentPay, setParentPay] = useState(30000);
  const [siblings, setSiblings] = useState(2);
  const [mainCareRate, setMainCareRate] = useState(50);

  const result = useMemo(() => {
    const gross = Math.max(0, monthlyCare) + Math.max(0, transport) + Math.max(0, medical) + Math.max(0, other);
    const familyShare = Math.max(0, gross - Math.max(0, parentPay));
    const people = Math.max(1, siblings);
    const mainCareRatio = Math.min(100, Math.max(0, mainCareRate)) / 100;
    const mainCareAmount = familyShare * mainCareRatio;
    const remaining = Math.max(0, familyShare - mainCareAmount);
    const otherCount = Math.max(0, people - 1);
    const otherAmount = otherCount === 0 ? 0 : remaining / otherCount;
    return {
      gross,
      familyShare,
      mainCareAmount,
      otherAmount,
      annualFamilyShare: familyShare * 12,
    };
  }, [monthlyCare, transport, medical, other, parentPay, siblings, mainCareRate]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />

      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">
          ãƒˆãƒƒãƒ—
        </Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">
          ãƒ„ãƒ¼ãƒ«
        </Link>
        <span className="mx-2">/</span>
        <span>ä»‹è­·è²»ç”¨åˆ†æ‹…ã‚·ãƒŸãƒ¥ãƒ¬ãƒ¼ã‚¿ãƒ¼</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">è¦ªã®ä»‹è­·ã¨ãŠé‡‘ã®æ•´ç†</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">ä»‹è­·è²»ç”¨åˆ†æ‹…ã‚·ãƒŸãƒ¥ãƒ¬ãƒ¼ã‚¿ãƒ¼</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          æ¯Žæœˆã®ä»‹è­·ã‚µãƒ¼ãƒ“ã‚¹è²»ã€é€šé™¢äº¤é€šè²»ã€åŒ»ç™‚è²»ã€è¦ªæœ¬äººã®è² æ‹…é¡ã‚’å…¥åŠ›ã—ã€å®¶æ—ãŒåˆ†æ‹…ã™ã‚‹æœˆé¡ã¨å¹´é¡ã®ç›®å®‰ã‚’è¨ˆç®—ã—ã¾ã™ã€‚
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-sm font-medium">ä»‹è­·ã‚µãƒ¼ãƒ“ã‚¹è²»/æœˆ</span>
            <input
              type="number"
              min={0}
              step={1000}
              value={monthlyCare}
              onChange={(e) => setMonthlyCare(Number(e.target.value))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">é€šé™¢ãƒ»é¢ä¼šäº¤é€šè²»/æœˆ</span>
            <input
              type="number"
              min={0}
              step={1000}
              value={transport}
              onChange={(e) => setTransport(Number(e.target.value))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">åŒ»ç™‚è²»ãƒ»è–¬ä»£/æœˆ</span>
            <input
              type="number"
              min={0}
              step={1000}
              value={medical}
              onChange={(e) => setMedical(Number(e.target.value))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">ãã®ä»–ã®å®Ÿè²»/æœˆ</span>
            <input
              type="number"
              min={0}
              step={1000}
              value={other}
              onChange={(e) => setOther(Number(e.target.value))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">è¦ªæœ¬äººã®è² æ‹…é¡/æœˆ</span>
            <input
              type="number"
              min={0}
              step={1000}
              value={parentPay}
              onChange={(e) => setParentPay(Number(e.target.value))}
              className="w-full rounded-lg border border border-card-border px-4 py-3 text-sm"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">åˆ†æ‹…ã™ã‚‹å®¶æ—äººæ•°</span>
            <input
              type="number"
              min={1}
              max={8}
              value={siblings}
              onChange={(e) => setSiblings(Math.max(1, Number(e.target.value)))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
        </div>

        <label className="mt-5 block">
          <span className="mb-2 block text-sm font-medium">ä¸»ã«ä»‹è­·å¯¾å¿œã™ã‚‹äººã®è² æ‹…å‰²åˆèíµ…¥¹…É•I…Ñ•ô”ð½ÍÁ…¸ø(€€€€€€€€€€ñ¥¹ÁÕÐ(€€€€€€€€€€€ÑåÁ”ô‰É…¹”ˆ(€€€€€€€€€€€µ¥¸õìÁô(€€€€€€€€€€€µ…àõìÄÀÁô(€€€€€€€€€€€ÍÑ•ÀõìÕô(€€€€€€€€€€€Ù…±Õ”õíµ…¥¹…É•I…Ñ•ô(€€€€€€€€€€€½¹¡…¹”õì¡”¤€ôøÍ•Ñ5…¥¹…É•I…Ñ”¡9Õµ‰•È¡”¹Ñ…É•Ð¹Ù…±Õ”¤¥ô(€€€€€€€€€€€±…ÍÍ9…µ”ô‰Üµ™Õ±°ˆ(€€€€€€€€€€¼ø(€€€€€€€€ð½±…‰•°ø((€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µÐ´ØÉ¥É¥µ½±Ì´Ä…À´ÌÍ´éÉ¥µ½±Ì´Ðˆø(€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰É½Õ¹‘•µ±œ‰œµ‰…­É½Õ¹À´ÐÑ•áÐµ•¹Ñ•Èˆø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰Ñ•áÐµáÌÑ•áÐµµÕÑ•ˆûšr#¦†7žÞ?¢ÊïžR ð½‘¥Øø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µÐ´ÄÑ•áÐµ±œ™½¹Ðµ‰½±ˆùíå•¸¡É•ÍÕ±Ð¹É½ÍÌ¥ôð½‘¥Øø(€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰É½Õ¹‘•µ±œ‰œµÁÉ¥µ…Éä¼ÄÀÀ´ÐÑ•áÐµ•¹Ñ•Èˆø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰Ñ•áÐµáÌÑ•áÐµµÕÑ•ˆû–ºÛš^?–"š.¿šr ð½‘¥Øø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µÐ´ÄÑ•áÐµ±œ™½¹Ðµ‰½±Ñ•áÐµÁÉ¥µ…Éäˆùíå•¸¡É•ÍÕ±Ð¹™…µ¥±åM¡…É”¥ôð½‘¥Øø(€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰É½Õ¹‘•µ±œ‰œµ‰…­É½Õ¹À´ÐÑ•áÐµ•¹Ñ•Èˆø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰Ñ•áÐµáÌÑ•áÐµµÕÑ•ˆû’âïš.–öOŽ»šr#¦†4ð½‘¥Øø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µÐ´ÄÑ•áÐµ±œ™½¹Ðµ‰½±ˆùíå•¸¡É•ÍÕ±Ð¹µ…¥¹…É•µ½Õ¹Ð¥ôð½‘¥Øø(€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰É½Õ¹‘•µ±œ‰œµ‰…­É½Õ¹À´ÐÑ•áÐµ•¹Ñ•Èˆø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰Ñ•áÐµáÌÑ•áÐµµÕÑ•ˆû’î[Ž»–ºÛš^<¿’êèð½‘¥Øø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µÐ´ÄÑ•áÐµ±œ™½¹Ðµ‰½±ˆùíå•¸¡É•ÍÕ±Ð¹½Ñ¡•Éµ½Õ¹Ð¥ôð½‘¥Øø(€€€€€€€€€€ð½‘¥Øø(€€€€€€€€ð½‘¥Øø((€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µÐ´ÐÉ½Õ¹‘•µ±œ‰½É‘•È‰½É‘•Èµ…Éµ‰½É‘•È‰œµ‰…­É½Õ¹À´Ðˆø(€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰Ñ•áÐµÍ´±•…‘¥¹œµÉ•±…á•ˆø(€€€€€€€€€€€ƒ–ºÛš^?–£’öOŽŸ¢Êƒš.ŽgŽ
/žn»–º'Ž¿Žšr#¦†4€ñÍÑÉ½¹œùíå•¸¡É•ÍÕ±Ð¹™…µ¥±åM¡…É”¥ôð½ÍÑÉ½¹œûŽ–æÓ¦†5ìˆ€‰ô(€€€€€€€€€€€€ñÍÑÉ½¹œùíå•¸¡É•ÍÕ±Ð¹…¹¹Õ…±…µ¥±åM¡…É”¥ôð½ÍÑÉ½¹œøƒŽŸŽgŽ–º¦joŽ»–"š.Ž¿Žž>û–rÃ–¾û–þsŽ¦k¦f‹’îcŽ7šÞïŽŽ’ê“¦k¢ÊïŽ¢š«šr³’êëŽ»¢ÎžRž*ÛšÎŽ
K–"ŽGŽ›¢¦ÇŽ_–B#ŽŽ›Ž?ŽƒŽWŽŽ(€€€€€€€€€€ð½Àø(€€€€€€€€ð½‘¥Øø(€€€€€€ð½Í•Ñ¥½¸ø((€€€€€€ñÍ•Ñ¥½¸±…ÍÍ9…µ”ô‰µÐ´àÉ½Õ¹‘•µá°‰½É‘•È‰½É‘•ÈµÁÉ¥µ…Éä¼ÈÀ‰œµÁÉ¥µ…Éä¼ÔÀ´Ôˆø(€€€€€€€€ñ È±…ÍÍ9…µ”ô‰Ñ•áÐµ±œ™½¹Ðµ‰½±ˆû¢¢#žº_žÖCšzsŽ
K¢¢c¦2ËŽ_Ž›–ºÛš^?ŽŸ–Çšr'ŽgŽ
,ð½ Èø(€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰µÐ´ÈÑ•áÐµÍ´±•…‘¥¹œµÉ•±…á•Ñ•áÐµµÕÑ•ˆø(€€€€€€€€€ƒŽOŽ»ŽŽóŽ¯Ž¿ššžº_žR£ŽŸŽgŽ¢ªÃŽ3’öWŽ
Kž®/Ž›šnÿŽ#ŽŽ/ŽŽŽ“žÊûžº_ŽgŽ
/Ž/ŽûŽŸšº/Žg–‚Ó–B#Ž¿Ž–ÂžR£ŽŽÏŽ_Ž³ŽóŽ#Ž¯¢î‹¢¢cŽ_Ž›žº‡žBŽ_Ž›Ž?ŽƒŽWŽŽ(€€€€€€€€ð½Àø(€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µÐ´Ð™±•à™±•àµÝÉ…À…À´Ìˆø(€€€€€€€€€€ñ„(€€€€€€€€€€€¡É•˜õí-%=}9Y%}UI1ô(€€€€€€€€€€€Ñ…É•Ðô‰}‰±…¹¬ˆ(€€€€€€€€€€€É•°ô‰¹½½Á•¹•È¹½É•™•ÉÉ•Èˆ(€€€€€€€€€€€½¹±¥¬õíÑÉ…­=ÕÑ‰½Õ¹ ‰­…¥½}¹…Ù¥}±¥¬ˆ°€‰Ñ½½±}Ñ„ˆ°-%=}9Y%}UI0¥ô(€€€€€€€€€€€±…ÍÍ9…µ”ô‰¥¹±¥¹”µ™±•à¥Ñ•µÌµ•¹Ñ•È©ÕÍÑ¥™äµ•¹Ñ•ÈÉ½Õ¹‘•µ±œ‰œµÁÉ¥µ…ÉäÁà´ÐÁä´ÌÑ•áÐµÍ´™½¹Ðµ‰½±Ñ•áÐµÝ¡¥Ñ”¡½Ù•Èé‰œµÁÉ¥µ…Éäµ¡½Ù•Èˆ(€€€€€€€€€€ø(€€€€€€€€€€€ƒ¢š«Ž»ŽOŽ£šVÓžBŽ+ŽOŽŸ¢¢ëšZ·ŽgŽ
,(€€€€€€€€€€ð½„ø(€€€€€€€€€€ñ„(€€€€€€€€€€€¡É•˜õí	==Q!}=MQ}Q5A1Q}UI1ô(€€€€€€€€€€€Ñ…É•Ðô‰}‰±…¹¬ˆ(€€€€€€€€€€€É•°ô‰¹½½Á•¹•È¹½É•™•ÉÉ•Èˆ(€€€€€€€€€€€½¹±¥¬õíÑÉ…­=ÕÑ‰½Õ¹ ‰‰½½Ñ¡}±¥¬ˆ°€‰½ÍÑ}Ñ•µÁ±…Ñ”ˆ°	==Q!}=MQ}Q5A1Q}UI0¥ô(€€€€€€€€€€€±…ÍÍ9…µ”ô‰¥¹±¥¹”µ™±•à¥Ñ•µÌµ•¹Ñ•È©ÕÍÑ¥™äµ•¹Ñ•ÈÉ½Õ¹‘•µ±œ‰½É‘•È‰½É‘•Èµ…Éµ‰½É‘•È‰œµ…Éµ‰œÁà´ÐÁä´ÌÑ•áÐµÍ´™½¹Ðµ‰½±¡½Ù•Èé‰½É‘•ÈµÁÉ¥µ…Éä¼ÐÀˆ(€€€€€€€€€€ø(€€€€€€€€€€€ƒ¢ÊïžR£–"š.ŽŽÏŽ_Ž³ŽóŽ#Ž
K¢š/Ž
,(€€€€€€€€€€ð½„ø(€€€€€€€€€€ñ„(€€€€€€€€€€€¡É•˜õí	==Q!}U11}A-}UI1ô(€€€€€€€€€€€Ñ…É•Ðô‰}‰±…¹¬ˆ(€€€€€€€€€€€É•°ô‰¹½½Á•¹•È¹½É•™•ÉÉ•Èˆ(€€€€€€€€€€€½¹±¥¬õíÑÉ…­=ÕÑ‰½Õ¹ ‰‰½½Ñ¡}±¥¬ˆ°€‰™Õ±±}Á…¬ˆ°	==Q!}U11}A-}UI0¥ô(€€€€€€€€€€€±…ÍÍ9…µ”ô‰¥¹±¥¹”µ™±•à¥Ñ•µÌµ•¹Ñ•È©ÕÍÑ¥™äµ•¹Ñ•ÈÉ½Õ¹‘•µ±œ‰½É‘•È‰½É‘•Èµ…Éµ‰½É‘•È‰œµ…Éµ‰œÁà´ÐÁä´ÌÑ•áÐµÍ´™½¹Ðµ‰½±¡½Ù•Èé‰½É‘•ÈµÁÉ¥µ…Éä¼ÐÀˆ(€€€€€€€€€€ø(€€€€€€€€€€€ƒžÞ?–B#ŽGŽŽ
¿Ž
K¢š/Ž
,(€€€€€€€€€€ð½„ø(€€€€€€€€€€ñ„(€€€€€€€€€€€¡É•˜õí-%91}1%9,¹¡É•™ô(€€€€€€€€€€€Ñ…É•Ðô‰}‰±…¹¬ˆ(€€€€€€€€€€€É•°ô‰¹½½Á•¹•È¹½É•™•ÉÉ•Èˆ(€€€€€€€€€€€½¹±¥¬õíÑÉ…­=ÕÑ‰½Õ¹¡-%91}1%9,¹•Ù•¹Ñ9…µ”°-%91}1%9,¹Á½Í¥Ñ¥½¸°-%91}1%9,¹¡É•˜¥ô(€€€€€€€€€€€±…ÍÍ9…µ”ô‰¥¹±¥¹”µ™±•à¥Ñ•µÌµ•¹Ñ•È©ÕÍÑ¥™äµ•¹Ñ•ÈÉ½Õ¹‘•µ±œ‰½É‘•È‰½É‘•Èµ…Éµ‰½É‘•È‰œµ…Éµ‰œÁà´ÐÁä´ÌÑ•áÐµÍ´™½¹Ðµ‰½±¡½Ù•Èé‰½É‘•ÈµÁÉ¥µ…Éä¼ÐÀˆ(€€€€€€€€€€ø(€€€€€€€€€€€í-%91}1%9,¹±…‰•±ô(€€€€€€€€€€ð½„ø(€€€€€€€€ð½‘¥Øø(€€€€€€ð½Í•Ñ¥½¸ø((€€€€€€ñQ½½±EM•Ñ¥½¸(€€€€€€€Ñ½½±9…µ”ô‹’î/¢¶ß¢ÊïžR£–"š.Ž
ßŽŽ—Ž³ŽóŽ
ÿŽðˆ(€€€€€€€¡½ÝQ¼õíl(€€€€€€€€€€‹š¾;šr#Ž»’î/¢¶ßŽ
×ŽóŽOŽ
ç¢ÊïŽ’ê“¦k¢ÊïŽ–2ïžf¢ÊïŽŽwŽ»’î[–º¢ÊïŽ
K–—–*oŽgŽ
,ˆ°(€€€€€€€€€€‹¢š«šr³’êëŽ3¢Êƒš.ŽŸŽ7Ž
/šr#¦†7Ž
K–—–*oŽgŽ
,ˆ°(€€€€€€€€€€‹–ºÛš^?ŽŸ–"š.ŽgŽ
/’êëšVÃŽ£’âïš.–öO¢Ž»¢Êƒš.–&Ë–B#Ž
KšÆëŽ
Ž
,ˆ°(€€€€€€€€€€‹šr#¦†7Ž£–æÓ¦†7Ž»žn»–º'Ž
KŽ–ºÛš^?’òk¢¶ÃŽ
¢¢c¦2ËŽŽÏŽ_Ž³ŽóŽ#Ž¯¢î‹¢¢cŽgŽ
,ˆ°(€€€€€€€uô(€€€€€€€™…ÅÌõíl(€€€€€€€€€ì(€€€€€€€€€€€ÅÕ•ÍÑ¥½¸è€‹ŽOŽ»¢¢#žº_žÖCšzsŽƒŽGŽŸ–ºÛš^?Ž»¢Êƒš.¦†7Ž
KšÆëŽ
Ž›Ž
#ŽŽŸŽgŽ/¾ò|ˆ°(€€€€€€€€€€€…¹ÍÝ•Èè(€€€€€€€€€€€€€€‹ŽOŽ»ŽŽóŽ¯Ž¿¢¦ÇŽ_–B#ŽŽ»ŽŽ
Ž»ššžº_ŽŸŽgŽ–º¦joŽ»¢Êƒš.Ž¿Žž>û–rÃ–¾û–þsŽ»šf¦ZOŽ’ê“¦k¢ÊïŽ¢š«šr³’êëŽ»¢ÎžRž*ÛšÎŽŽ7Ž
ŽŽƒŽ¦ZOŽ»–B#š?Ž
K–"ŽGŽ›žŠë¢ª7Ž_Ž›Ž?ŽƒŽWŽŽˆ°(€€€€€€€€€ô°(€€€€€€€€€ì(€€€€€€€€€€€ÅÕ•ÍÑ¥½¸è€‹¢š«šr³’êëŽ»¢Êƒš.¦†7Ž¯Ž¿’öWŽ
K–—Ž
3ŽûŽgŽ/¾ò|ˆ°(€€€€€€€€€€€…¹ÍÝ•Èè(€€€€€€€€€€€€€€‹¢š«Ž»–æÓ¦GŽ
¦‚C¢Ê¿¦GŽ/Ž
'š¾;šr#šR¿š&WŽ’ê#–ºkŽ»¦G¦†7Ž
K–—Ž
3ŽûŽgŽ–ºÛš^?Ž3’âšfžjŽ¯ž®/Ž›šnÿŽ#Ž
/–‚Ó–B#Ž¿Ž–"—¦Sž®/šnÿ¢¢c¦2ËŽ£Ž_Ž›šº/ŽgŽ£žÊûžº_Ž_Ž
ŽgŽ?Ž«Ž
+ŽûŽgŽˆ°(€€€€€€€€€ô°(€€€€€€€€€ì(€€€€€€€€€€€ÅÕ•ÍÑ¥½¸è€‹’âïŽ¯’î/¢¶ß–¾û–þsŽgŽ
/’êëŽ»¢Êƒš.–&Ë–B#Ž¿Ž§Ž¢Ž#ŽûŽgŽ/¾ò|ˆ°(€€€€€€€€€€€…¹ÍÝ•Èè(€€€€€€€€€€€€€€‹ž>û–rÃ–¾û–þsŽ
¦k¦f‹’îcŽ7šÞïŽŽ3–’kŽ’êëŽ¿Ž¦G¦*·¢Êƒš.Ž
K¢î÷Ž?ŽgŽ
/¢Ž#šZçŽ
ŽŽ
+ŽûŽgŽ¦Ž¯¦G¦*·¢Êƒš.Ž
K–’kŽ
Ž¯Ž_Ž›Ž’ösš–·¢Êƒš.Ž£Ž»ŽCŽ§ŽÏŽ
çŽ
K–>[Ž
/–ºÛ–ê·Ž
ŽŽ
+ŽûŽgŽˆ°(€€€€€€€€€ô°(€€€€€€€€€ì(€€€€€€€€€€€ÅÕ•ÍÑ¥½¸è€‹ž¢;–.gŽ
žnãžÚkŽ»–"“šZ·Ž¯Ž
’öÿŽ#ŽûŽgŽ/¾ò|ˆ°(€€€€€€€€€€€…¹ÍÝ•Èè(€€€€€€€€€€€€€€‹ž¢;–.gŽ¢Ò#’â;ŽžnãžÚkŽš&Û¦’+Ž––GžÒŽ»–"“šZ·Ž¯Ž¿’öÿŽ#ŽûŽoŽ
OŽ¢ÎšZgšVÓžBŽ»¢Žs–*§Ž£Ž_Ž›’öÿŽŽšržÖ–"“šZ·Ž¿ž¢;žB–Ž¯Ž
–³žjžªO–>Ž¯žŠë¢ª7Ž_Ž›Ž?ŽƒŽWŽŽˆ°(€€€€€€€€€ô°(€€€€€€€uô(€€€€€€¼ø((€€€€€€ñ™™¥±¥…Ñ•M•Ñ¥½¸Í±ÕœõíQ==1}M1Uô…Ñ•½Éäô‹š^—–âãŽŽóŽ¬ˆ€¼ø(€€€€€€ñI•±…Ñ•‘Q½½±ÌÕÉÉ•¹ÑM±ÕœõíQ==1}M1Uô…Ñ•½Éäô‹š^—–âãŽŽóŽ¬ˆ€¼ø(€€€€ð½‘¥Øø(€€¤ì)ô(