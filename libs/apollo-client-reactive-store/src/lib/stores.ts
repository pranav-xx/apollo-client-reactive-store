import { ReactiveVar } from "@apollo/client";

export const stores: Map<string, Map<string, ReactiveVar<any>>> = new Map();
