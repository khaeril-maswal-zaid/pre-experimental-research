// Pages...................................................................
import NavbarComp from "../Components/NavbarComp";
import JumbotronComp from "../Components/JumbotronComp";
import GainTableComp from "../Components/GainTableComp";
import ClassifPreTableComp from "../Components/ClassifPreTableComp";
import ClassifPostTableComp from "../Components/ClassifPostTableComp";
import PercenatgePreComp from "../Components/PercenatgePreComp";
import PercenatgePostComp from "../Components/PercenatgePostComp";

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const DataCollaction = () => {
  return (
    <>
      <NavbarComp />
      <JumbotronComp />

      <div className="">
        <Tabs
          aria-label="Tabs with icons"
          variant="underline"
          className="container mx-auto items-center justify-center bg-gradient-to-r to-emerald-50 from-sky-100 rounded-md my-3"
        >
          <Tabs.Item active title="Classif. PreTest" icon={HiUserCircle}>
            <ClassifPreTableComp />
          </Tabs.Item>

          <Tabs.Item active title="Classif. PostTest" icon={HiUserCircle}>
            <ClassifPostTableComp />
          </Tabs.Item>

          <Tabs.Item active title="Data Gain" icon={HiUserCircle}>
            <GainTableComp />
          </Tabs.Item>

          <Tabs.Item title="Perc. Rage PreTest" icon={MdDashboard}>
            <PercenatgePreComp />
          </Tabs.Item>

          <Tabs.Item title="Perc. Rage PostTest" icon={MdDashboard}>
            <PercenatgePostComp />
          </Tabs.Item>

          <Tabs.Item
            title="Mean Score PreTest"
            icon={HiAdjustments}
          ></Tabs.Item>
          <Tabs.Item
            title="Mean Score PostTest"
            icon={HiAdjustments}
          ></Tabs.Item>
          <Tabs.Item title="Mean Score Gain" icon={HiClipboardList}></Tabs.Item>
          <Tabs.Item
            title="Diffrent of Percentage"
            icon={HiClipboardList}
          ></Tabs.Item>

          <Tabs.Item
            title="Std. Deviation PreTest"
            icon={HiClipboardList}
          ></Tabs.Item>

          <Tabs.Item
            title="Std. Deviation PostTest"
            icon={HiClipboardList}
          ></Tabs.Item>

          <Tabs.Item title="Value of T-Test" icon={HiClipboardList}></Tabs.Item>
        </Tabs>
      </div>
    </>
  );
};

export default DataCollaction;
