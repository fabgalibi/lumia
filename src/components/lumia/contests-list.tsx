import { Users01, Clock, ArrowRight, Star01, Bookmark } from "@untitledui/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Contest {
    id: string;
    title: string;
    organization: string;
    location: string;
    vacancies: number;
    salary: string;
    registrationStart: string;
    registrationEnd: string;
    examDate: string;
    level: string;
    category: string;
    status: 'aberto' | 'proximo' | 'encerrado';
    isBookmarked: boolean;
    rating: number;
}

const mockContests: Contest[] = [
    {
        id: '1',
        title: 'Analista Judiciário - Área Administrativa',
        organization: 'Tribunal Regional Federal da 1ª Região',
        location: 'Brasília - DF',
        vacancies: 45,
        salary: 'R$ 8.000,00',
        registrationStart: '15/01/2024',
        registrationEnd: '15/02/2024',
        examDate: '15/03/2024',
        level: 'Superior',
        category: 'Federal',
        status: 'aberto',
        isBookmarked: false,
        rating: 4.8
    },
    {
        id: '2',
        title: 'Técnico em Informática',
        organization: 'Prefeitura Municipal de São Paulo',
        location: 'São Paulo - SP',
        vacancies: 120,
        salary: 'R$ 4.500,00',
        registrationStart: '20/01/2024',
        registrationEnd: '20/02/2024',
        examDate: '20/03/2024',
        level: 'Médio',
        category: 'Municipal',
        status: 'aberto',
        isBookmarked: true,
        rating: 4.6
    },
    {
        id: '3',
        title: 'Perito Criminal',
        organization: 'Polícia Civil do Estado de São Paulo',
        location: 'São Paulo - SP',
        vacancies: 30,
        salary: 'R$ 12.000,00',
        registrationStart: '01/02/2024',
        registrationEnd: '01/03/2024',
        examDate: '01/04/2024',
        level: 'Superior',
        category: 'Estadual',
        status: 'proximo',
        isBookmarked: false,
        rating: 4.9
    },
    {
        id: '4',
        title: 'Agente de Polícia',
        organization: 'Polícia Militar do Estado do Rio de Janeiro',
        location: 'Rio de Janeiro - RJ',
        vacancies: 200,
        salary: 'R$ 6.500,00',
        registrationStart: '10/12/2023',
        registrationEnd: '10/01/2024',
        examDate: '10/02/2024',
        level: 'Médio',
        category: 'Militar',
        status: 'encerrado',
        isBookmarked: true,
        rating: 4.7
    }
];

const getStatusColor = (status: Contest['status']) => {
    switch (status) {
        case 'aberto':
            return 'bg-green-100 text-green-800';
        case 'proximo':
            return 'bg-yellow-100 text-yellow-800';
        case 'encerrado':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
};

const getStatusText = (status: Contest['status']) => {
    switch (status) {
        case 'aberto':
            return 'Inscrições Abertas';
        case 'proximo':
            return 'Em Breve';
        case 'encerrado':
            return 'Encerrado';
        default:
            return status;
    }
};

export const ContestsList = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Concursos em Destaque</h2>
                        <p className="text-gray-600 mt-2">Encontre as melhores oportunidades de concursos públicos</p>
                    </div>
                    <Button color="secondary" size="sm">
                        Ver todos
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <Button color="primary" size="sm">Todos</Button>
                    <Button color="secondary" size="sm">Abertos</Button>
                    <Button color="secondary" size="sm">Federais</Button>
                    <Button color="secondary" size="sm">Estaduais</Button>
                    <Button color="secondary" size="sm">Municipais</Button>
                    <Button color="secondary" size="sm">Militares</Button>
                </div>

                {/* Contests Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockContests.map((contest) => (
                        <div key={contest.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <div className="p-6">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge className={getStatusColor(contest.status)}>
                                                {getStatusText(contest.status)}
                                            </Badge>
                                            <Badge className="text-xs">
                                                {contest.category}
                                            </Badge>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                                            {contest.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">{contest.organization}</p>
                                    </div>
                                    <Button
                                        color="tertiary"
                                        size="sm"
                                        iconLeading={contest.isBookmarked ? Bookmark : Bookmark}
                                        className={`${contest.isBookmarked ? 'text-blue-600' : 'text-gray-400'} hover:text-blue-600`}
                                    />
                                </div>

                                {/* Details */}
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <span className="h-4 w-4 mr-2 text-gray-400">📍</span>
                                        {contest.location}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Users01 className="h-4 w-4 mr-2" />
                                        {contest.vacancies} vagas
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Clock className="h-4 w-4 mr-2" />
                                        {contest.level}
                                    </div>
                                    <div className="text-lg font-semibold text-green-600">
                                        {contest.salary}
                                    </div>
                                </div>

                                {/* Dates */}
                                <div className="border-t pt-4 mb-4">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <div className="text-gray-500">Inscrições:</div>
                                            <div className="font-medium">{contest.registrationStart} a {contest.registrationEnd}</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-500">Prova:</div>
                                            <div className="font-medium">{contest.examDate}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <Star01 className="h-4 w-4 text-yellow-400 fill-current" />
                                        <span className="ml-1 text-sm font-medium">{contest.rating}</span>
                                        <span className="ml-1 text-sm text-gray-500">(4.2k avaliações)</span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2">
                                    <Button color="secondary" size="sm" className="flex-1">
                                        Ver Detalhes
                                    </Button>
                                    <Button color="primary" size="sm" className="flex-1">
                                        Inscrever-se
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                    <Button color="secondary" size="lg">
                        Carregar Mais Concursos
                    </Button>
                </div>
            </div>
        </section>
    );
};
