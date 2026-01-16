export interface Trail {
  id: number;
  title: string;
  description: string;
  image: string;
  difficulty: "მარტივი" | "საშუალო" | "რთული";
  distance: string;
  elevation: string;
  rating: number;
  location: string;
}


const mockTrails: Trail[] = [
  {
    id: 1,
    title: "ტყის ბილიკი",
    description: "სამშვილდე - სეირნობა უძველეს ცივილიზაციაში",
    image: "/images/trail1.jpg",
    difficulty: "მარტივი",
    distance: "5.2 km",
    elevation: "240 m",
    rating: 4.5,
    location: "Samtskhe-Javakheti"
  },
  {
    id: 2,
    title: "უდაბნოს ბილიკი",
    description: "გარეჯის უდაბნო - ბუნების საოცრება",
    image: "/images/trail2.jpg",
    difficulty: "საშუალო",
    distance: "8.7 km",
    elevation: "350 m",
    rating: 4.8,
    location: "Kakheti"
  },
  {
    id: 3,
    title: "პანორამული ტყის ბილიკი",
    description: "ადგილი სადაც მთა და ტყე ერთიანდება",
    image: "/images/trail3.jpg",
    difficulty: "რთული",
    distance: "12.5 km",
    elevation: "580 m",
    rating: 4.7,
    location: "Tusheti"
  },
  {
    id: 4,
    title: "მთის მწვერვალი",
    description: "გადმოხედე სხვადასხვა მხარეს",
    image: "/images/trail1.jpg",
    difficulty: "რთული",
    distance: "15.3 km",
    elevation: "1200 m",
    rating: 4.9,
    location: "Kazbegi"
  },
  {
    id: 5,
    title: "ღრმა ხეობის ბილიკი",
    description: "დაათვალიერე ულამაზესი ხეობა",
    image: "/images/trail2.jpg",
    difficulty: "საშუალო",
    distance: "9.1 km",
    elevation: "420 m",
    rating: 4.6,
    location: "Mestia"
  },
  {
    id: 6,
    title: "ტბის გარშემო სეირნობა",
    description: "ქვეყნის ულამაზესი ტბა",
    image: "/images/trail3.jpg",
    difficulty: "მარტივი",
    distance: "4.5 km",
    elevation: "100 m",
    rating: 4.4,
    location: "Svaneti"
  }
];

export const fetchTrails = async (): Promise<Trail[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTrails);
    }, 500);
  });

};
