import { Module } from "../module";

const PREFIX = "notes";

export class NotesModule extends Module {
  constructor() {
    super("Notes", PREFIX);
  }
}
