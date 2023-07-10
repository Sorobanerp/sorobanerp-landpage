import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contatos"
        description="Contate-nos através dos contatos abaixo, nos siga nas redes sociais."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
