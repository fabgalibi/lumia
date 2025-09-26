import { SearchLg, Calendar, Users01 } from "@untitledui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Encontre o Concurso
                        <span className="block text-blue-200">Perfeito para Você</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        Milhares de oportunidades de concursos públicos esperando por você. 
                        Comece sua jornada rumo ao sucesso profissional hoje mesmo.
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="bg-white rounded-lg p-6 shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Search Input */}
                        <div className="lg:col-span-2">
                            <div className="relative">
                                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchLg className="h-5 w-5 text-gray-400" />
                            </div>
                                <Input
                                    type="text"
                                    placeholder="Digite o cargo, órgão ou palavra-chave..."
                                    className="pl-10 h-12 text-gray-900"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div>
                            <Select placeholder="Categoria">
                                <option value="">Todas as categorias</option>
                                <option value="federal">Federal</option>
                                <option value="estadual">Estadual</option>
                                <option value="municipal">Municipal</option>
                                <option value="militar">Militar</option>
                            </Select>
                        </div>

                        {/* State Filter */}
                        <div>
                            <Select placeholder="Estado">
                                <option value="">Todos os estados</option>
                                <option value="sp">São Paulo</option>
                                <option value="rj">Rio de Janeiro</option>
                                <option value="mg">Minas Gerais</option>
                                <option value="rs">Rio Grande do Sul</option>
                            </Select>
                        </div>
                    </div>

                    {/* Additional Filters */}
                    <div className="mt-4 flex flex-wrap items-center gap-4">
                        <div className="flex items-center space-x-2">
                            <Calendar className="h-5 w-5 text-gray-500" />
                            <span className="text-sm text-gray-600">Data de inscrição:</span>
                            <Select placeholder="Período" className="w-40">
                                <option value="">Qualquer período</option>
                                <option value="abertos">Abertos</option>
                                <option value="proximos">Próximos</option>
                                <option value="encerrados">Encerrados</option>
                            </Select>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Users01 className="h-5 w-5 text-gray-500" />
                            <span className="text-sm text-gray-600">Nível:</span>
                            <Select placeholder="Nível" className="w-32">
                                <option value="">Todos</option>
                                <option value="fundamental">Fundamental</option>
                                <option value="medio">Médio</option>
                                <option value="superior">Superior</option>
                            </Select>
                        </div>

                        <Button
                            color="tertiary"
                            size="sm"
                            className="text-gray-600 hover:text-gray-800"
                        >
                            🔍 Mais filtros
                        </Button>
                    </div>

                    {/* Search Button */}
                    <div className="mt-6 text-center">
                        <Button
                            color="primary"
                            size="lg"
                            iconLeading={SearchLg}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                        >
                            Buscar Concursos
                        </Button>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="text-3xl font-bold text-blue-200">2,500+</div>
                        <div className="text-blue-100">Concursos Ativos</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-blue-200">50,000+</div>
                        <div className="text-blue-100">Vagas Disponíveis</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-blue-200">1M+</div>
                        <div className="text-blue-100">Candidatos Cadastrados</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
