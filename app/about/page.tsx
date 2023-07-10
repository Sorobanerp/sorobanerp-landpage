import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre a Solução"
        description="O Soroban ERP se propõe a armazenar e controlar todas as informações necessárias para as atividades da empresa de forma modular, permitindo que empresas das mais diversas áreas possam utilizar a solução, adicionando os módulos que fazem sentido para a área de atuação da empresa."
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
