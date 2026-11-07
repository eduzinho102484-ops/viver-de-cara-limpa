import { config } from "../config.js";

// Texto-base informativo. O controlador deve confirmar o fluxo e revisar este conteúdo juridicamente.
export default function PrivacyPolicy() {
  return (
    <section id="privacidade" className="privacy">
      <details>
        <summary>Política de privacidade e tratamento de dados pessoais</summary>
        <div className="privacy-body">
          <p>
            O site não possui formulários, cadastro ou armazenamento local de dados. Ao clicar no WhatsApp, você será
            direcionado a um serviço de terceiros. Esse serviço recebe dados da sua conta e as informações que decidir
            enviar. Evite compartilhar dados de saúde ou detalhes pessoais desnecessários.
          </p>
          <h4>Finalidade e compartilhamento</h4>
          <p>
            As informações que a equipe receber poderão ser usadas para responder ao pedido de orientação. O
            compartilhamento com uma instituição deve ocorrer apenas quando necessário e após sua autorização. O prazo
            de retenção e os procedimentos internos precisam ser definidos pelo responsável pelo tratamento.
          </p>
          <h4>Seus direitos</h4>
          <p>
            Você pode solicitar confirmação do tratamento, acesso, correção ou eliminação de dados, entre outros
            direitos previstos na LGPD. Use o canal oficial de contato desta página
            {config.privacyEmail ? <> ou o e-mail {config.privacyEmail}</> : null}.
          </p>
          <h4>Serviços de terceiros</h4>
          <p>
            WhatsApp, Google Maps, Google Fonts e o serviço de imagens Unsplash podem receber dados técnicos conforme
            suas próprias políticas. Não usamos ferramentas de rastreamento ou analytics nesta versão do site.
          </p>
          <h4>Responsável pelo tratamento</h4>
          <p>
            {config.privacyController || "A organização responsável ainda precisa identificar o controlador"}
            {config.privacyEmail ? <> e pode ser contatada pelo e-mail {config.privacyEmail}</> : ", assim como o canal específico para solicitações"}. Esses dados devem ser confirmados pela organização antes da publicação.
          </p>
        </div>
      </details>
    </section>
  );
}
