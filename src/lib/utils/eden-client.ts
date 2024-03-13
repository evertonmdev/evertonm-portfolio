"use client";
import { edenFetch } from "@elysiajs/eden";
import { TAPI } from "../services/api/main";

const URL = "./";
export const ApiClient = edenFetch<TAPI>(URL);
