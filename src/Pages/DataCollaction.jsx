// Pages...................................................................
import NavbarComp from "../Components/NavbarComp";
import JumbotronComp from "../Components/JumbotronComp";
import MathEquations from "../Components/MathEquations";
import GainTableComp from "../Components/GainTableComp";
import ClassifPreTableComp from "../Components/ClassifPreTableComp";
import ClassifPostTableComp from "../Components/ClassifPostTableComp";
import PercentagePreComp from "../Components/PercentagePreComp";
import PercentagePostComp from "../Components/PercentagePostComp";
import MeanScoreComp from "../Components/MeanScoreComp";
import DiffPercentageComp from "../Components/DiffPercentageComp";
import StandarDeviationComp from "../Components/StandarDeviationComp";
import TTable from "../Components/TTable";

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const DataCollaction = () => {
  return (
    <>
      <NavbarComp />
      <JumbotronComp />

      <Tabs
        aria-label="Tabs with icons"
        variant="underline"
        className="container mx-auto items-center justify-center bg-gradient-to-r to-emerald-50 from-sky-100 rounded-md my-3"
      >
        <Tabs.Item active title="Stand. Classification" icon={HiUserCircle}>
          <MathEquations />
        </Tabs.Item>

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
          <PercentagePreComp />
        </Tabs.Item>

        <Tabs.Item title="Perc. Rage PostTest" icon={MdDashboard}>
          <PercentagePostComp />
        </Tabs.Item>

        <Tabs.Item title="Mean Score PreTest" icon={HiAdjustments}>
          <MeanScoreComp />
        </Tabs.Item>

        <Tabs.Item title="Diffrent of Percentage" icon={HiClipboardList}>
          <DiffPercentageComp />
        </Tabs.Item>

        <Tabs.Item title="Standar Deviation" icon={HiClipboardList}>
          <StandarDeviationComp />
        </Tabs.Item>

        <Tabs.Item title="Value of T-Test" icon={HiClipboardList}>
          <TTable />
        </Tabs.Item>
      </Tabs>
    </>
  );
};

export default DataCollaction;
