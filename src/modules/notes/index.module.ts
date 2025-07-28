import { Module } from "../module";
import { makeContainer } from "./infrastructure/container";

const PREFIX = "notes";

export class NotesModule extends Module {
  constructor() {
    super("Notes", PREFIX, makeContainer());
  }
}
