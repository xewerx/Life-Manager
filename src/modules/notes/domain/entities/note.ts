import { Entity } from "./entity";
import { v4 as uuidv4 } from "uuid";

type NoteProps = {
  title: string;
  content: string;
};

export class Note extends Entity<NoteProps> {
  constructor(public title: string, public content: string) {
    const id = uuidv4();
    super(id, { title, content });
  }

  equals(other: Note): boolean {
    return this.id === other.id;
  }
}
