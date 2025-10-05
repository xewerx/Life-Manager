import { Entity } from "./entity";

type NoteProps = {
  title: string;
  content: string;
};

export class Note extends Entity<NoteProps> {
  constructor(public title: string, public content: string) {
    super({ title, content });
  }

  equals(other: Note): boolean {
    return this.id === other.id;
  }

  static toObject(note: Note) {
    return {
      id: note.id,
      title: note.title,
      content: note.content,
    };
  }
}
