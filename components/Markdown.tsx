import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export interface MarkdownProps {
  url: string;
  
}

export default function Markdown({ url }: MarkdownProps) {
  const [ markdown, setMarkdown ] = useState<string>('');


  //const fileUrl = "https://raw.githubusercontent.com/jbend/trimble-react-tailwind-ts/main/README.md";
  const fileUrl = url;//"https://raw.githubusercontent.com/jbend/trimble-react-tailwind-ts/main/README.md";

  useEffect(() => {
    fetch(fileUrl)
      .then(response => response.text())
      .then(text => {
        //console.log(text);
        setMarkdown(text);
      })
  },[]); 

  return (
    <div className="w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
      <article className="prose">
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
      </article>
    </div>
  );
}