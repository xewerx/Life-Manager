export class Note {
  constructor(
    public readonly id: string,
    public title: string,
    public content: string
  ) {}

  changeContent(newContent: string) {
    this.content = newContent;
  }
}
