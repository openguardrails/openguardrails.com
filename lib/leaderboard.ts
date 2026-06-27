// Illustrative placeholder rows. Real numbers come from openguardrails-bench.
// OpenGuardrails itself does NOT submit a detector — it runs the board.

export type Row = {
  detector: string;
  type: "model" | "config" | "hybrid";
  injectionF1: number | null;
  maliciousCmdF1: number | null;
  exfilF1: number | null;
  p95ms: number | null;
};

export const SAMPLE_ROWS: Row[] = [
  { detector: "Vendor A", type: "model", injectionF1: null, maliciousCmdF1: null, exfilF1: null, p95ms: null },
  { detector: "Vendor B", type: "config", injectionF1: null, maliciousCmdF1: null, exfilF1: null, p95ms: null },
  { detector: "LlamaGuard", type: "model", injectionF1: null, maliciousCmdF1: null, exfilF1: null, p95ms: null },
  { detector: "Qwen3Guard", type: "model", injectionF1: null, maliciousCmdF1: null, exfilF1: null, p95ms: null },
  { detector: "Your detector", type: "hybrid", injectionF1: null, maliciousCmdF1: null, exfilF1: null, p95ms: null },
];

export const fmt = (v: number | null) => (v === null ? "—" : v.toFixed(1));
