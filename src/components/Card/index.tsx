// export interface Card {
//   title: string;
//   summary: string;
//   topics: string;
//   url: string;
// }
import { Key } from "react";

const Card = ({title, summary, topics, url, bannerImg}: any) => {
  return (
    <>
      <div className="flex-col sm:flex-row flex items-center p-4 gap-10 border rounded-xl mb-4">
        <img
          src={bannerImg}
          alt="content"
          className="sm:max-w-[500px] rounded-l-md"
        />
        <div className="flex flex-col text-start items-start gap-5 sm:max-w-[400px]">
          <p className="sm:text-[20px] text-[15px] font-semibold">{title}</p>

          <div className="inline-flex">
            {topics.map((item: { topic: string }, index: Key) => (
              <p
                key={index}
                className="sm:text-[14px] text-[12px] font-semibold text-black bg-lime-custom px-1 mr-2"
              >
                {item.topic}
              </p>
            ))}
          </div>
          <p className="font-light">{summary}</p>
          <a href={url}>
            <div className="w-40 my-3 p-3 rounded-full bg-lime-custom text-black text-center cursor-pointer font-semibold">
              Read More
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
