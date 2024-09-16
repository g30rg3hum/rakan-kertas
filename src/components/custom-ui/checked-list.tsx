interface Props {
  points: string[];
}

export default function CheckedList({ points }: Props) {
  return (
    <ul className="list-image-[url(/images/check-solid.svg)] list-inside w-max">
      {points.map((point, index) => (
        <li key={index}>
          <span className="ml-1">{point}</span>
        </li>
      ))}
    </ul>
  );
}
