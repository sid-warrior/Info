import { BlogList } from "components";
import { getAllPosts } from "pages/api/blog";
import { NextSeo } from "next-seo";
import { ContentWrapper } from "ui";

export default function Pen({ }) {
  return (
    <>
      <NextSeo title="Kalam - Sidhant" />

      <ContentWrapper width="620px">
        <h2 className="font-medium text-black text-2xl mb-4 mt-4">Kalam</h2>
        <p className="mb-4 pb-4">
          Random thoughts, lines and everything that crosses my mind, now on
          this paper
        </p>
        <hr />
        <div className="post-content mt-4">
          <div className="mb-4">
            July 20, 2025 at 12:07 / My Birthday Special
          </div>
          <pre>
            <code>
              Happy Birthday! Today isn't just another year; it's a fresh chapter, a chance to celebrate how far you've come and ignite the courage for the incredible journey ahead, filled with new goals, bold adventures, and the unwavering belief that the best is truly yet to come as you turn challenges into opportunities and dreams into reality, so let's raise a glass to your strength, your spirit, and the amazing things you're destined to achieve!
            </code>
          </pre>
          <div className="mb-4">
            March 10, 2025 at 23:10 / Purchase My Scooter
          </div>
          <pre>
            <code>
              "After not using my scooter for a long time, I thought about selling it on OLX for Rs 30,000. Many offers came in ranging from 15 to 28 thousand. One person offered 29,000 but could only manage 24,000.
              He called and said, 'Sir, I've seen your scooter ad, and I like it. But I can only manage 24,000 even though I've worked hard. Please give me some time; I'll arrange the money.'
              I simply said 'Ok' and hung up. I had some thoughts. I called back and said, 'Don't sell your mobile; tomorrow morning, I'll come with 24,000, and you can keep the scooter for 24,000 only.'
              Despite having a 29,000 offer, I was going to give the scooter to a stranger for 24,000. I thought about the happiness this would bring to his family.
              The next morning, he called several times, eager to make the deal. He brought 2,000, 500, 200, 100, and 50 rupee notes but with his daughter instead of his son. I handed over the scooter keys, helmet, and documents. She got on the scooter with joy.
              She counted the money, and I said, 'You brought it honestly, no problem. When you go home, buy sweets.'
              I wanted to make sure if the money was from selling oil or not, and if it was, both sweets and oil would come into use.
              With tears of gratitude in her eyes, she asked for permission to leave. I asked, 'Who is this daughter?' She replied, 'This is my son.' ❤️
              She bid farewell humbly and took her scooter. While leaving, she thanked me repeatedly.
              Friends, in life, we should not always focus on profit or loss. Sometimes, seeing the joy someone gains through our means is equally important."
            </code>
          </pre>
        </div>
      </ContentWrapper>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "external",
  ]);

  return {
    props: { allPosts },
  };
}
