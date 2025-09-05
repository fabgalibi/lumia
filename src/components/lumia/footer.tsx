import { Phone } from "@untitledui/icons";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">Lumia</h3>
                        <p className="text-gray-300 mb-6">
                            A plataforma mais completa para encontrar e se preparar para concursos públicos. 
                            Conectamos você às melhores oportunidades de carreira.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="h-6 w-6">📘</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="h-6 w-6">🐦</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="h-6 w-6">📷</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="h-6 w-6">💼</span>
                            </a>
                        </div>
                    </div>

                    {/* Concursos */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Concursos</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Concursos Abertos</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Próximos Concursos</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Concursos Federais</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Concursos Estaduais</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Concursos Municipais</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Concursos Militares</a></li>
                        </ul>
                    </div>

                    {/* Recursos */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Recursos</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Simulados</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Materiais de Estudo</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cronograma de Estudos</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Dicas de Estudo</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Fórum</a></li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contato</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <span className="h-5 w-5 mr-3 text-blue-400">✉️</span>
                                <span className="text-gray-300">contato@lumia.com.br</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                                <span className="text-gray-300">(11) 99999-9999</span>
                            </li>
                            <li className="flex items-start">
                                <span className="h-5 w-5 mr-3 text-blue-400 mt-1">📍</span>
                                <span className="text-gray-300">
                                    São Paulo, SP<br />
                                    Brasil
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2024 Lumia. Todos os direitos reservados.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
