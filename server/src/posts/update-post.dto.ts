export class UpdatePostDto {
  readonly title?: string;
  readonly content?: string;
  readonly image?: string;
  readonly author?: string;
  readonly date?: string;
  readonly category?: string;
  readonly tags?: string;
  readonly views?: number;
  readonly likes?: number;
  readonly dislikes?: number;
  readonly comments?: string[];
  readonly video?: string;
}
