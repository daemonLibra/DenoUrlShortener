import { shortenUrl } from "./urlShortener.ts";
import { assertEquals } from "https://deno.land/std@0.97.0/testing/asserts.ts";

Deno.test("Test Assert Equals", () => {
    assertEquals(1, 1);
    assertEquals("x", shortenUrl("Hello"));
  });