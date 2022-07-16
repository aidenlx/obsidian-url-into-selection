import "obsidian";

declare module "obsidian" {
  interface SearchCursor {
    current(): EditorRange | null;
    findNext(): EditorRange | null;
    findPrevious(): EditorRange | null;
    findAll(): EditorRange[];
    replace(replacement: string, origin?: string): void;
    replaceAll(replacement: string, origin?: string): void;
  }
  interface Editor {
    searchCursor(
      query: string,
      options?: { regex: boolean; ignoreCase: boolean }
    ): SearchCursor;
  }
}
