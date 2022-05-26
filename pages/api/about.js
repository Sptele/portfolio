// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	const data = {
		name: "Gautam Khajuria",
		pronouns: ["he", "him", "his"],
		github: "https://github.com/Sptele",
		profilePic: "https://avatars.githubusercontent.com/u/79765399?v=4",
		occupation: "Student",
		programmingLangs: ["Java", "JavaScript", "C++", "C#", "HTML", "CSS", "Python"],
		preferences: {
			IDES: {
				Java: "IntelliJ IDEA",
				CPP: "Visual Studio Code",
				CSharp: "Visual Studio",
				JavaScript: "Visual Studio Code",
				HTMLCSS: "Visual Studio Code",
				Python: "Pystorm"
			},
			computer: "Some ASUS lol",

		}
	};

	res.status(200).json(data);
}
