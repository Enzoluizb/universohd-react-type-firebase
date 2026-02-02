type Props = {
  nome: string;
  texto: string;
};

export default function AvaliacaoCard({ nome, texto }: Props) {
  return (
    <div className="w-full mx-auto rounded-lg bg-[#e3e1e6] border border-gray-400 p-5 text-gray-800 font-light h-full min-h-[220px]">
      <div className="w-full flex mb-4 items-center">
        <h6 className="font-bold text-sm uppercase text-gray-600">{nome}</h6>
      </div>

      <p className="text-sm leading-tight">
        <span className="text-lg italic font-bold text-gray-400 mr-1">"</span>
        {texto}
        <span className="text-lg italic font-bold text-gray-400 ml-1">"</span>
      </p>
    </div>
  );
}
