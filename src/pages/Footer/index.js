import React from "react";
import {FooterContainer, SectionTitle, SectionLinks, SectionLink, PaymentMethods, PaymentIcon} from "./styled";

const Footer = () => {
  return (
    <FooterContainer>
        <div>
        <SectionTitle>Institucional</SectionTitle>
        <SectionLinks>
          <SectionLink>Quem Somos</SectionLink>
          <SectionLink>Trabalhe Conosco</SectionLink>
          <SectionLink>Lojas Físicas</SectionLink>
        </SectionLinks>
      </div>
      <div>
        <SectionTitle>Produtos</SectionTitle>
        <SectionLinks>
          <SectionLink>Celulares</SectionLink>
          <SectionLink>Tablets</SectionLink>
          <SectionLink>Notebooks</SectionLink>
          <SectionLink>Smartwatches</SectionLink>
        </SectionLinks>
      </div>
      <div>
        <SectionTitle>Atendimento ao Cliente</SectionTitle>
        <SectionLinks>
          <SectionLink>SAC</SectionLink>
          <SectionLink>Central de Ajuda</SectionLink>
          <SectionLink>Fale conosco</SectionLink>
          <SectionLink>Política de Trocas</SectionLink>
          <SectionLink>Política de Privacidade</SectionLink>
        </SectionLinks>
      </div>
      <PaymentMethods>
        <PaymentIcon src="https://blog.logomyway.com/wp-content/uploads/2022/02/visa-logo-2.jpg" alt="Visa" />
        <PaymentIcon src="https://blog.eveo.com.br/hs-fs/hubfs/hubspot-blog/Imported_Blog_Media/Mastercard-2.png?width=244&height=164&name=Mastercard-2.png" alt="Mastercard" />
        <PaymentIcon src="https://vetores.org/wp-content/uploads/pix-banco-central.png" alt="American Express" />
      </PaymentMethods>
    </FooterContainer>
  );
};

export default Footer;