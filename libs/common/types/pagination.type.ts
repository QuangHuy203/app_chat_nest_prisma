export interface Pagination {
  skip?: number;
  take?: number;
  cursor?: number;
  sort?: any;
  search?: any;
}

export type EmailContent = {
  type: 'text' | 'html';
  data: string;
};

export class MailMessage {
  title: string;
  content: EmailContent;
  to: string;
  html: string;
  params: {
    [name: string]: any;
  };

  constructor(
    to: string,
    title: string,
    content: EmailContent,
    params: {
      [name: string]: any;
    },
  ) {
    this.to = to;
    this.title = title;
    this.content = content;
    this.params = params;
  }
}
