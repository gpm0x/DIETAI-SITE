import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white font-inter text-gray-900">
            <Header />

            <main className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="font-outfit text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tighter">
                            Política de Privacidade
                        </h1>

                        <div className="prose prose-emerald max-w-none text-gray-600 space-y-6 font-medium leading-relaxed">
                            <section className="space-y-4">
                                <p>
                                    A sua privacidade é importante para nós. É política do DietAI respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://diet-ai-steel.vercel.app/#" className="text-emerald-600 hover:underline">DietAI</a>, e outros sites que possuímos e operamos.
                                </p>
                                <p>
                                    Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                                </p>
                                <p>
                                    Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                                </p>
                                <p>
                                    Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                                </p>
                                <p>
                                    O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas <a href="https://politicaprivacidade.com/" rel="noopener noreferrer" target="_blank" className="text-emerald-600 hover:underline">políticas de privacidade</a>.
                                </p>
                                <p>
                                    Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                                </p>
                                <p>
                                    O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>
                                        O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
                                    </li>
                                    <li>
                                        Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.
                                    </li>
                                    <li>
                                        Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
                                    </li>
                                    <li>
                                        Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.
                                    </li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Compromisso do Usuário</h3>
                                <p>
                                    O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o DietAI oferece no site e com caráter enunciativo, mas não limitativo:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                                    <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                                    <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do DietAI, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mais informações</h3>
                                <p>
                                    Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                                </p>
                                <p className="pt-6 text-sm text-gray-400">
                                    Esta política é efetiva a partir de <strong>7 January 2026 15:09</strong>.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
