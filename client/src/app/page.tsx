import Column from "@/shared/components/global/column/Column";
import Heading from "@/shared/components/global/heading/Heading";
import HiddenOnLg from "@/shared/components/global/hidden-on-lg/HiddenOnLg";
import Row from "@/shared/components/global/row/Row";
import Slide from "@/shared/components/global/slide/Slide";
import Teste from "@/shared/components/global/teste/Teste";
import TipsCard from "@/shared/components/global/tips_card/TipsCard";
import UserDataSideBar from "@/shared/components/global/user-data-sidebar/UserDataSideBar";
import WideWrapping from "@/shared/components/global/wide-wrapping/WideWrapping";
import { SwiperSlide } from "swiper/react";


export default function Page() {
  return (
    <WideWrapping>
      <Row>

        <div className="flex-grow">
          <Column>
            <div>
               <Heading content="Good Morning Anima" />
               <p className="font-medium">Have a nice day</p>
            </div>
            <Slide configs={{slidesPerView:4}} dataArr={[1,2,3,4,5]} Component={TipsCard}/>
          </Column>
        </div>

        <HiddenOnLg>
          <UserDataSideBar />
        </HiddenOnLg>

      </Row>
    </WideWrapping>
  );
}
