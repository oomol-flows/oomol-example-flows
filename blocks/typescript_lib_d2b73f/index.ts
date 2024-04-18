
import type { VocanaMainFunction } from "@vocana/sdk";

export const main: VocanaMainFunction<any, any> = async (
  inputs,
  context
) => {
  await context.output({
    question: "天空是什么颜色？",
  }, "out", true);
};