import { Button, Htag, Paragraph, Rating, Tag } from "@/components";
import { withLayout } from "../layout/Layout";
import { useState } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.inteefaces";

function Home({ menu, firstCategory }: HomeProps) {
  const [rating, setRating] = useState<number>(4);
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <Paragraph font="little">
        Mattis sit nec faucibus. Eleifend urna non pulvinar quam, sapien
        venenatis in dapibus sit non velit vitae in efficitur tempus amet velit
        nisi dictum platea hac dapibus mauris vestibulum pulvinar dapibus morbi
        nunc sit lacinia sit nisi risus leo, interdum odio. Quis, justo non
        ornare sodales interdum hac eleifend vestibulum ipsum interdum habitasse
        sit ut. Id mollis sit urna ut. Tempus arcu ut. Sit sed dictumst.
        Vulputate et. Sit in in interdum est. Vel sit molestie imperdiet augue
        dui non nisi malesuada sodales tempus ornare morbi dictum tortor,
        vulputate ex. Nulla dictumst. Accumsan habitasse odio. Amet, in nec
        pellentesque null.
      </Paragraph>
      <Paragraph>
        Mattis sit nec faucibus. Eleifend urna non pulvinar quam, sapien
        venenatis in dapibus sit non velit vitae in efficitur tempus amet velit
        nisi dictum platea hac dapibus mauris vestibulum pulvinar dapibus morbi
        nunc sit lacinia sit nisi risus leo, interdum odio. Quis, justo non
        ornare sodales interdum hac eleifend vestibulum ipsum interdum habitasse
        sit ut. Id mollis sit urna ut. Tempus arcu ut. Sit sed dictumst.
        Vulputate et. Sit in in interdum est. Vel sit molestie imperdiet augue
        dui non nisi malesuada sodales tempus ornare morbi dictum tortor,
        vulputate ex. Nulla dictumst. Accumsan habitasse odio. Amet, in nec
        pellentesque null.
      </Paragraph>
      <Paragraph font="big">
        Mattis sit nec faucibus. Eleifend urna non pulvinar quam, sapien
        venenatis in dapibus sit non velit vitae in efficitur tempus amet velit
        nisi dictum platea hac dapibus mauris vestibulum pulvinar dapibus morbi
        nunc sit lacinia sit nisi risus leo, interdum odio. Quis, justo non
        ornare sodales interdum hac eleifend vestibulum ipsum interdum habitasse
        sit ut. Id mollis sit urna ut. Tempus arcu ut. Sit sed dictumst.
        Vulputate et. Sit in in interdum est. Vel sit molestie imperdiet augue
        dui non nisi malesuada sodales tempus ornare morbi dictum tortor,
        vulputate ex. Nulla dictumst. Accumsan habitasse odio. Amet, in nec
        pellentesque null.
      </Paragraph>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag color="primary">Primary</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",{
      firstCategory
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string,unknown>{
  menu: MenuItem[];
  firstCategory: number;
}
