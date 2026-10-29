import type { StaticImageData } from "next/image";

import logo from "@/assets/images/brand/mad-hair-lab-logo.png";
import elleBw from "@/assets/images/elle/elle-bw.jpg";
import ellePortrait from "@/assets/images/elle/elle-portrait.jpg";
import blowout from "@/assets/images/salon/behind-the-chair-blowout.jpg";
import styling from "@/assets/images/salon/behind-the-chair-styling.jpg";
import neonSign from "@/assets/images/salon/neon-sign-stations.jpg";
import stylingChair from "@/assets/images/salon/styling-chair.jpg";
import bigBlonde from "@/assets/images/work/big-blonde-volume.jpg";
import brunetteLayers from "@/assets/images/work/brunette-layers.jpg";
import caramel from "@/assets/images/work/caramel-dimension.jpg";
import colorApplication from "@/assets/images/work/color-application.jpg";
import colorProcess from "@/assets/images/work/color-process.jpg";
import copperMovement from "@/assets/images/work/copper-movement.jpg";
import copperProfile from "@/assets/images/work/copper-profile.jpg";
import copperRibbon from "@/assets/images/work/copper-ribbon-brunette.jpg";
import curtainBang from "@/assets/images/work/curtain-bang-blonde.jpg";
import desertBlonde from "@/assets/images/work/desert-blonde.jpg";
import emerald from "@/assets/images/work/emerald-vivid.jpg";
import eventWaves from "@/assets/images/work/event-waves-group.jpg";
import glamCurls from "@/assets/images/work/glam-curls.jpg";
import icyPlatinum from "@/assets/images/work/icy-platinum.jpg";
import livedInBlonde from "@/assets/images/work/lived-in-blonde-field.jpg";
import moneyFront from "@/assets/images/work/money-piece-brunette-front.jpg";
import moneySide from "@/assets/images/work/money-piece-brunette-side.jpg";
import neonEditorial from "@/assets/images/work/neon-editorial.jpg";
import pearlBlonde from "@/assets/images/work/pearl-blonde-waves.jpg";
import pearlPinned from "@/assets/images/work/pearl-pinned-bronde.jpg";
import prismBlonde from "@/assets/images/work/prism-blonde.jpg";
import rootedAsh from "@/assets/images/work/rooted-ash-waves.jpg";
import shortCut from "@/assets/images/work/short-cut-bw.jpg";
import softBronde from "@/assets/images/work/soft-bronde.jpg";
import splitCopper from "@/assets/images/work/split-blonde-copper.jpg";
import splitStudio from "@/assets/images/work/split-blonde-red-studio.jpg";
import stageBlonde from "@/assets/images/work/stage-light-blonde.jpg";
import sunsetBlonde from "@/assets/images/work/sunset-blonde.jpg";
import weftInstall from "@/assets/images/work/weft-install.jpg";

/**
 * Where an image came from. Used for the asset inventory and to keep proof honest.
 * - portfolio: published by the salon on its GlossGenius portfolio page
 * - owner-profile: the owner's GlossGenius profile / site cover
 * - client-upload: original phone/camera files uploaded to the previous (rejected) mockup;
 *   believed supplied by the salon, subject and stylist still to be confirmed with Elle
 */
export type Provenance = "portfolio" | "owner-profile" | "client-upload";

export type Category = "blonding" | "dimensional" | "copper-vivid" | "extensions" | "cuts-styling" | "backstage";

export const categoryLabels: Record<Category, string> = {
  blonding: "Blonding",
  dimensional: "Dimensional & Brunette",
  "copper-vivid": "Copper & Vivid",
  extensions: "Extensions",
  "cuts-styling": "Cuts & Styling",
  backstage: "Behind the Chair",
};

export type Shot = {
  id: string;
  src: StaticImageData;
  alt: string;
  title: string;
  category: Category;
  provenance: Provenance;
  /** CSS object-position for tight crops */
  focus?: string;
};

export const brand = { logo };

export const portraits = {
  elle: {
    src: ellePortrait,
    alt: "Elle, owner of Mad Hair Lab, leaning toward the camera in a black lace top inside her salon",
    provenance: "owner-profile" as Provenance,
  },
  elleBw: {
    src: elleBw,
    alt: "Black-and-white portrait of Elle smiling, long waves falling over one shoulder",
    provenance: "client-upload" as Provenance,
  },
};

export const salon = {
  neonSign: {
    src: neonSign,
    alt: "Mad Hair Lab styling stations lit in green and violet, with the neon Mad Hair Lab sign on the wall",
  },
  stylingChair: {
    src: stylingChair,
    alt: "A cognac leather styling chair at Mad Hair Lab under blue and green salon lighting",
  },
  blowout: {
    src: blowout,
    alt: "A stylist blow-drying a client's hair at a wood-framed mirror station",
  },
  styling: {
    src: styling,
    alt: "A stylist finishing a client's blonde waves in front of an arched mirror",
  },
};

export const shots: Shot[] = [
  { id: "big-blonde", src: bigBlonde, alt: "Long, voluminous golden blonde hair with soft face-framing layers", title: "Big blonde volume", category: "blonding", provenance: "client-upload", focus: "50% 30%" },
  { id: "soft-bronde", src: softBronde, alt: "Soft bronde color with subtle lighter pieces, styled in loose waves", title: "Soft bronde, barely-there brightness", category: "dimensional", provenance: "portfolio" },
  { id: "weft-install", src: weftInstall, alt: "Back view of a weft hair extension row placed under long, blended blonde hair", title: "Weft install, mid-appointment", category: "extensions", provenance: "portfolio", focus: "50% 25%" },
  { id: "money-front", src: moneyFront, alt: "Shoulder-length brunette hair with bold blonde face-framing pieces", title: "Brunette with a bright face frame", category: "dimensional", provenance: "client-upload", focus: "50% 30%" },
  { id: "copper-movement", src: copperMovement, alt: "Glossy copper-red hair in motion, seen from behind", title: "Copper in motion", category: "copper-vivid", provenance: "client-upload" },
  { id: "lived-in-blonde", src: livedInBlonde, alt: "Lived-in blonde with a softly rooted base and long waves", title: "Lived-in blonde", category: "blonding", provenance: "portfolio" },
  { id: "caramel", src: caramel, alt: "Long curled hair melting from brunette roots into caramel ends, seen from behind", title: "Caramel dimension", category: "dimensional", provenance: "portfolio" },
  { id: "icy-platinum", src: icyPlatinum, alt: "Icy platinum blonde waves seen from behind inside the salon", title: "Icy platinum", category: "blonding", provenance: "client-upload" },
  { id: "rooted-ash", src: rootedAsh, alt: "Rooted ash-brown hair melting into pale blonde waves", title: "Rooted ash melt", category: "blonding", provenance: "client-upload", focus: "50% 30%" },
  { id: "stage-blonde", src: stageBlonde, alt: "Blonde curls lit with pink and green stage lights", title: "Stage-light curls", category: "blonding", provenance: "portfolio" },
  { id: "copper-ribbon", src: copperRibbon, alt: "Long brunette hair with copper-red ribbons and pearl hair pins", title: "Brunette with copper ribbons", category: "dimensional", provenance: "client-upload", focus: "50% 30%" },
  { id: "split-copper", src: splitCopper, alt: "Long straight hair, half platinum blonde and half copper red", title: "Half blonde, half copper", category: "copper-vivid", provenance: "client-upload", focus: "50% 30%" },
  { id: "pearl-blonde", src: pearlBlonde, alt: "Extra-long pearl blonde waves", title: "Pearl blonde, extra long", category: "blonding", provenance: "portfolio" },
  { id: "curtain-bang", src: curtainBang, alt: "Long layered blonde hair with curtain bangs", title: "Curtain bangs & long layers", category: "cuts-styling", provenance: "client-upload", focus: "50% 25%" },
  { id: "brunette-layers", src: brunetteLayers, alt: "Long brunette layers with soft waves", title: "Brunette layers", category: "cuts-styling", provenance: "client-upload" },
  { id: "emerald", src: emerald, alt: "Deep emerald-green hair worn under a wide-brim hat, in profile", title: "Emerald vivid", category: "copper-vivid", provenance: "portfolio" },
  { id: "money-side", src: moneySide, alt: "Side view of shoulder-length brunette hair with bold blonde pieces and soft waves", title: "Bright pieces, side view", category: "dimensional", provenance: "client-upload", focus: "50% 30%" },
  { id: "sunset-blonde", src: sunsetBlonde, alt: "Golden blonde waves photographed outdoors at sunset", title: "Sunset blonde", category: "blonding", provenance: "client-upload", focus: "50% 25%" },
  { id: "copper-profile", src: copperProfile, alt: "Rich copper-red hair in profile", title: "Copper, in profile", category: "copper-vivid", provenance: "client-upload" },
  { id: "pearl-pinned", src: pearlPinned, alt: "Bronde waves with pearl pins, seen from behind", title: "Bronde with pearl pins", category: "cuts-styling", provenance: "client-upload" },
  { id: "split-studio", src: splitStudio, alt: "Hair split between blonde and bright red, photographed on a lilac backdrop", title: "Blonde-meets-red split", category: "copper-vivid", provenance: "client-upload", focus: "50% 20%" },
  { id: "glam-curls", src: glamCurls, alt: "Glamorous blonde curls under pink and teal party lighting", title: "Glam curls", category: "cuts-styling", provenance: "portfolio" },
  { id: "desert-blonde", src: desertBlonde, alt: "Lived-in blonde waves photographed in the desert", title: "Desert blonde", category: "blonding", provenance: "portfolio" },
  { id: "event-waves", src: eventWaves, alt: "A group of women with dark hair styled in half-up waves for an event", title: "Event-ready waves", category: "cuts-styling", provenance: "portfolio", focus: "60% 50%" },
  { id: "short-cut", src: shortCut, alt: "Black-and-white photo of a man with tattooed arms running his hands through a short haircut", title: "Short cut, styled", category: "cuts-styling", provenance: "portfolio" },
  { id: "prism-blonde", src: prismBlonde, alt: "Blonde waves photographed through a prism with rainbow light", title: "Prism blonde", category: "blonding", provenance: "portfolio" },
  { id: "color-application", src: colorApplication, alt: "Gloved hands applying lightener to a foil with a pink color brush", title: "Painting the formula", category: "backstage", provenance: "portfolio" },
  { id: "color-process", src: colorProcess, alt: "A stylist combing color through a client's wet hair at the shampoo bowl", title: "At the bowl", category: "backstage", provenance: "portfolio" },
  { id: "neon-editorial", src: neonEditorial, alt: "Editorial photo in magenta neon light with tinsel and heart-shaped sunglasses", title: "Neon editorial", category: "backstage", provenance: "portfolio" },
];

export function shot(id: string): Shot {
  const s = shots.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown shot: ${id}`);
  return s;
}

/**
 * Before/after pairs. Leave empty until a pair is confirmed to show the same client and
 * the same appointment. The comparison slider only renders when this has entries.
 */
export type Pair = { id: string; before: Shot; after: Shot; caption: string };
export const pairs: Pair[] = [];
