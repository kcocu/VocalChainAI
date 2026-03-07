// Vocal processing chain preset matrix
// Structure: Genre × VocalType × Mood → complete signal chain

import { EQ_PRESETS } from "./eq-presets";
import { COMP_PRESETS } from "./comp-presets";
import { DELAY_PRESETS } from "./delay-presets";
import { REVERB_PRESETS } from "./reverb-presets";
import { DEESSER_PRESETS, SATURATION_PRESETS, PITCH_PRESETS, DOUBLING_PRESETS } from "./effect-presets";

// Re-export for components
export { EQ_PRESETS, COMP_PRESETS, DELAY_PRESETS, REVERB_PRESETS };
export { DEESSER_PRESETS, SATURATION_PRESETS, PITCH_PRESETS, DOUBLING_PRESETS };

// ─── Chain Generator ───
const CHAIN_MATRIX = {
  pop: {
    female: {
      bright: { eq: "female_pop_bright", comp: "medium", deesser: "female", delay: "studio_tape", reverb: "valhalla_vintage_plate", saturation: null, pitch: "natural", doubling: null },
      warm:   { eq: "female_pop_warm",   comp: "opto_smooth", deesser: "female", delay: "echoplex", reverb: "soundtoys_little_plate", saturation: "subtle_warmth", pitch: "natural", doubling: null },
      dark:   { eq: "female_pop_warm",   comp: "medium", deesser: "female", delay: "dm2_dark", reverb: "valhalla_vintage_dark", saturation: "tape_saturation", pitch: "natural", doubling: null },
    },
    male: {
      bright: { eq: "male_pop_bright", comp: "vca_transparent", deesser: "male", delay: "studio_tape", reverb: "fabfilter_pro_r", saturation: null, pitch: "natural", doubling: null },
      warm:   { eq: "male_pop_warm",   comp: "opto_smooth", deesser: "male", delay: "echoplex", reverb: "valhalla_vintage_plate", saturation: "subtle_warmth", pitch: "natural", doubling: null },
      dark:   { eq: "male_pop_warm",   comp: "medium", deesser: "male", delay: "dm2_dark", reverb: "uad_capitol", saturation: "tape_saturation", pitch: "natural", doubling: null },
    },
  },
  rnb: {
    female: {
      bright: { eq: "female_rnb", comp: "opto_smooth", deesser: "female", delay: "studio_tape", reverb: "fabfilter_pro_r", saturation: null, pitch: "natural", doubling: "subtle_double" },
      warm:   { eq: "female_rnb", comp: "opto_smooth", deesser: "female", delay: "echoplex", reverb: "soundtoys_little_plate", saturation: "subtle_warmth", pitch: "natural", doubling: "subtle_double" },
      dark:   { eq: "female_rnb", comp: "medium", deesser: "female", delay: "space_echo", reverb: "lexicon_hall", saturation: "tape_saturation", pitch: "natural", doubling: null },
    },
    male: {
      bright: { eq: "male_rnb", comp: "opto_smooth", deesser: "male", delay: "studio_tape", reverb: "valhalla_vintage_plate", saturation: null, pitch: "natural", doubling: "subtle_double" },
      warm:   { eq: "male_rnb", comp: "opto_smooth", deesser: "male", delay: "echoplex", reverb: "uad_capitol", saturation: "tube_warmth", pitch: "natural", doubling: "subtle_double" },
      dark:   { eq: "male_rnb", comp: "medium", deesser: "male", delay: "dm2_dark", reverb: "rc20_lofi", saturation: "tape_saturation", pitch: "natural", doubling: null },
    },
  },
  hiphop: {
    female: {
      bright: { eq: "hiphop_female", comp: "aggressive", deesser: "female_bright", delay: "digital_clean", reverb: "valhalla_vintage_plate", saturation: null, pitch: null, doubling: null },
      warm:   { eq: "hiphop_female", comp: "aggressive", deesser: "female", delay: "slapback", reverb: "valhalla_room", saturation: "subtle_warmth", pitch: null, doubling: "microshift" },
      dark:   { eq: "hiphop_female", comp: "parallel", deesser: "female", delay: "dm2_dark", reverb: "rc20_lofi", saturation: "tape_saturation", pitch: null, doubling: null },
    },
    male: {
      bright: { eq: "hiphop_male", comp: "aggressive", deesser: "male_hiphop", delay: "digital_clean", reverb: "fabfilter_pro_r", saturation: null, pitch: null, doubling: null },
      warm:   { eq: "hiphop_male", comp: "aggressive", deesser: "male", delay: "slapback", reverb: "slate_plates", saturation: "subtle_warmth", pitch: null, doubling: null },
      dark:   { eq: "hiphop_trap", comp: "parallel", deesser: "male_hiphop", delay: "dm2_dark", reverb: "rc20_lofi", saturation: "aggressive_dist", pitch: "auto_tune_effect", doubling: null },
    },
  },
  rock: {
    female: {
      bright: { eq: "female_rock", comp: "aggressive", deesser: "female", delay: "slapback", reverb: "lexicon_hall", saturation: "subtle_warmth", pitch: null, doubling: null },
      warm:   { eq: "female_rock", comp: "medium", deesser: "female", delay: "master_tape", reverb: "valhalla_room", saturation: "tape_saturation", pitch: null, doubling: null },
      dark:   { eq: "female_rock", comp: "fet_punchy", deesser: "female", delay: "space_echo", reverb: "uad_capitol", saturation: "aggressive_dist", pitch: null, doubling: null },
    },
    male: {
      bright: { eq: "male_rock", comp: "aggressive", deesser: "male", delay: "slapback", reverb: "lexicon_hall", saturation: "subtle_warmth", pitch: null, doubling: null },
      warm:   { eq: "male_rock", comp: "medium", deesser: "male", delay: "master_tape", reverb: "valhalla_vintage_plate", saturation: "tape_saturation", pitch: null, doubling: null },
      dark:   { eq: "male_rock", comp: "fet_punchy", deesser: "male", delay: "dm2_dark", reverb: "native_instruments_raum", saturation: "aggressive_dist", pitch: null, doubling: null },
    },
  },
  ballad: {
    female: {
      bright: { eq: "female_pop_bright", comp: "gentle", deesser: "gentle_preserve", delay: "studio_tape", reverb: "valhalla_vintage_plate", saturation: null, pitch: "natural", doubling: null },
      warm:   { eq: "ballad", comp: "opto_smooth", deesser: "female", delay: "echoplex", reverb: "lexicon_hall", saturation: "subtle_warmth", pitch: "natural", doubling: null },
      dark:   { eq: "ballad_intimate", comp: "gentle", deesser: "gentle_preserve", delay: "throw_delay", reverb: "valhalla_shimmer", saturation: "tape_saturation", pitch: "natural", doubling: null },
    },
    male: {
      bright: { eq: "male_pop_bright", comp: "gentle", deesser: "gentle_preserve", delay: "studio_tape", reverb: "fabfilter_pro_r", saturation: null, pitch: "natural", doubling: null },
      warm:   { eq: "ballad", comp: "opto_smooth", deesser: "male", delay: "echoplex", reverb: "uad_capitol", saturation: "tube_warmth", pitch: "natural", doubling: null },
      dark:   { eq: "ballad_intimate", comp: "vari_mu_warm", deesser: "gentle_preserve", delay: "throw_delay", reverb: "arturia_rev_plate", saturation: "tape_saturation", pitch: "natural", doubling: null },
    },
  },
  edm: {
    female: {
      bright: { eq: "edm", comp: "vca_transparent", deesser: "female_bright", delay: "ping_pong", reverb: "valhalla_shimmer", saturation: null, pitch: "auto_tune_effect", doubling: "microshift" },
      warm:   { eq: "edm", comp: "medium", deesser: "female", delay: "studio_tape", reverb: "fabfilter_pro_r", saturation: "subtle_warmth", pitch: "natural", doubling: null },
      dark:   { eq: "edm", comp: "aggressive", deesser: "female", delay: "dm2_dark", reverb: "native_instruments_raum", saturation: "tape_saturation", pitch: null, doubling: null },
    },
    male: {
      bright: { eq: "edm", comp: "vca_transparent", deesser: "male", delay: "ping_pong", reverb: "valhalla_shimmer", saturation: null, pitch: "auto_tune_effect", doubling: "microshift" },
      warm:   { eq: "edm", comp: "medium", deesser: "male", delay: "studio_tape", reverb: "waves_h_reverb", saturation: "subtle_warmth", pitch: "natural", doubling: null },
      dark:   { eq: "edm", comp: "aggressive", deesser: "male", delay: "dm2_dark", reverb: "native_instruments_raum", saturation: "aggressive_dist", pitch: null, doubling: null },
    },
  },
  jazz: {
    female: {
      bright: { eq: "jazz_female", comp: "vari_mu_warm", deesser: "gentle_preserve", delay: "studio_tape", reverb: "uad_capitol", saturation: null, pitch: null, doubling: null },
      warm:   { eq: "jazz_female", comp: "vari_mu_warm", deesser: "gentle_preserve", delay: "echoplex", reverb: "lexicon_vocal_plate", saturation: "tube_warmth", pitch: null, doubling: null },
      dark:   { eq: "jazz_female", comp: "opto_smooth", deesser: "gentle_preserve", delay: "memory_man", reverb: "valhalla_vintage_dark", saturation: "tape_saturation", pitch: null, doubling: null },
    },
    male: {
      bright: { eq: "jazz_male", comp: "vari_mu_warm", deesser: "gentle_preserve", delay: "studio_tape", reverb: "uad_capitol", saturation: null, pitch: null, doubling: null },
      warm:   { eq: "jazz_male", comp: "vari_mu_warm", deesser: "gentle_preserve", delay: "echoplex", reverb: "arturia_rev_plate", saturation: "tube_warmth", pitch: null, doubling: null },
      dark:   { eq: "jazz_male", comp: "opto_smooth", deesser: "gentle_preserve", delay: "memory_man", reverb: "valhalla_vintage_dark", saturation: "tape_saturation", pitch: null, doubling: null },
    },
  },
  acoustic: {
    female: {
      bright: { eq: "acoustic_female", comp: "gentle", deesser: "gentle_preserve", delay: "studio_tape", reverb: "valhalla_room", saturation: null, pitch: "natural", doubling: null },
      warm:   { eq: "acoustic_female", comp: "opto_smooth", deesser: "female", delay: "echoplex", reverb: "uad_capitol", saturation: "subtle_warmth", pitch: "natural", doubling: null },
      dark:   { eq: "acoustic_female", comp: "gentle", deesser: "gentle_preserve", delay: "memory_man", reverb: "lexicon_hall", saturation: "tape_saturation", pitch: "natural", doubling: null },
    },
    male: {
      bright: { eq: "acoustic_male", comp: "gentle", deesser: "gentle_preserve", delay: "studio_tape", reverb: "valhalla_room", saturation: null, pitch: "natural", doubling: null },
      warm:   { eq: "acoustic_male", comp: "opto_smooth", deesser: "male", delay: "echoplex", reverb: "arturia_rev_plate", saturation: "tube_warmth", pitch: "natural", doubling: null },
      dark:   { eq: "acoustic_male", comp: "vari_mu_warm", deesser: "gentle_preserve", delay: "memory_man", reverb: "valhalla_vintage_dark", saturation: "tape_saturation", pitch: "natural", doubling: null },
    },
  },
  kpop: {
    female: {
      bright: { eq: "kpop_female", comp: "vca_transparent", deesser: "female_bright", delay: "studio_tape", reverb: "fabfilter_pro_r", saturation: null, pitch: "natural", doubling: "microshift" },
      warm:   { eq: "kpop_female", comp: "medium", deesser: "female", delay: "echoplex", reverb: "valhalla_vintage_plate", saturation: "subtle_warmth", pitch: "natural", doubling: "subtle_double" },
      dark:   { eq: "kpop_female", comp: "medium", deesser: "female", delay: "dm2_dark", reverb: "native_instruments_raum", saturation: "tape_saturation", pitch: "natural", doubling: null },
    },
    male: {
      bright: { eq: "kpop_male", comp: "vca_transparent", deesser: "male", delay: "studio_tape", reverb: "fabfilter_pro_r", saturation: null, pitch: "natural", doubling: "microshift" },
      warm:   { eq: "kpop_male", comp: "medium", deesser: "male", delay: "echoplex", reverb: "valhalla_vintage_plate", saturation: "subtle_warmth", pitch: "natural", doubling: "subtle_double" },
      dark:   { eq: "kpop_male", comp: "opto_smooth", deesser: "male", delay: "dm2_dark", reverb: "valhalla_vintage_dark", saturation: "tape_saturation", pitch: "natural", doubling: null },
    },
  },
  country: {
    female: {
      bright: { eq: "country_female", comp: "medium", deesser: "female", delay: "slapback", reverb: "valhalla_vintage_plate", saturation: null, pitch: "natural", doubling: null },
      warm:   { eq: "country_female", comp: "opto_smooth", deesser: "female", delay: "echoplex", reverb: "uad_capitol", saturation: "subtle_warmth", pitch: "natural", doubling: null },
      dark:   { eq: "country_female", comp: "gentle", deesser: "gentle_preserve", delay: "master_tape", reverb: "lexicon_hall", saturation: "tape_saturation", pitch: "natural", doubling: null },
    },
    male: {
      bright: { eq: "country_male", comp: "medium", deesser: "male", delay: "slapback", reverb: "valhalla_vintage_plate", saturation: null, pitch: "natural", doubling: null },
      warm:   { eq: "country_male", comp: "opto_smooth", deesser: "male", delay: "echoplex", reverb: "arturia_rev_plate", saturation: "tube_warmth", pitch: "natural", doubling: null },
      dark:   { eq: "country_male", comp: "vari_mu_warm", deesser: "gentle_preserve", delay: "master_tape", reverb: "valhalla_vintage_dark", saturation: "tape_saturation", pitch: "natural", doubling: null },
    },
  },
};

export function generateChain(genre, vocalType, mood) {
  const chain = CHAIN_MATRIX[genre]?.[vocalType]?.[mood];
  if (!chain) return null;

  return {
    eq: EQ_PRESETS[chain.eq],
    comp: COMP_PRESETS[chain.comp],
    deesser: DEESSER_PRESETS[chain.deesser],
    delay: DELAY_PRESETS[chain.delay],
    reverb: REVERB_PRESETS[chain.reverb],
    saturation: chain.saturation ? SATURATION_PRESETS[chain.saturation] : null,
    pitch: chain.pitch ? PITCH_PRESETS[chain.pitch] : null,
    doubling: chain.doubling ? DOUBLING_PRESETS[chain.doubling] : null,
  };
}

export const GENRES = [
  { id: "pop", label: "Pop" },
  { id: "rnb", label: "R&B / Soul" },
  { id: "hiphop", label: "Hip-Hop / Rap" },
  { id: "rock", label: "Rock / Indie" },
  { id: "ballad", label: "Ballad" },
  { id: "edm", label: "EDM / Electronic" },
  { id: "jazz", label: "Jazz" },
  { id: "acoustic", label: "Acoustic" },
  { id: "kpop", label: "K-Pop" },
  { id: "country", label: "Country / Folk" },
];

export const VOCAL_TYPES = [
  { id: "female", label: "Female" },
  { id: "male", label: "Male" },
];

export const MOODS = [
  { id: "bright", label: "Bright / Clear" },
  { id: "warm", label: "Warm / Smooth" },
  { id: "dark", label: "Dark / Moody" },
];
