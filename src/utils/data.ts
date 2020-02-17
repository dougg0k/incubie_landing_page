import AccessTimeIcon from "@material-ui/icons/AccessTime";
import BuildIcon from "@material-ui/icons/Build";
import FacebookIcon from "@material-ui/icons/Facebook";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import StarRateIcon from "@material-ui/icons/StarRate";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import IconIdea from "../images/icon-idea.json";
import IconNotes from "../images/icon-notes.json";
import IconTarget from "../images/icon-target.json";

export const footerData = [
	{
		link: "https://www.facebook.com/incubie/",
		ariaLabel: "Facebook",
		icon: FacebookIcon,
	},
	{
		link: "https://twitter.com/IncubieApp",
		ariaLabel: "Twitter",
		icon: TwitterIcon,
	},
	{
		link: "https://www.youtube.com/channel/UCtUUmRBPdWuWdB-3KjMi3xw",
		ariaLabel: "Youtube",
		icon: YouTubeIcon,
	},
	{
		link: "https://www.linkedin.com/company/incubie/",
		ariaLabel: "Linkedin",
		icon: LinkedInIcon,
	},
];

export const benefitsData = [
	{
		title: "Save Time",
		description:
			"Spend less time in meetings and email. More time managing your project.",
		icon: AccessTimeIcon,
		sideAnimation: "left",
		animationDuration: 1,
	},
	{
		title: "Fix Your Backlog",
		description: "Keep ideas in Incubie, and proven concepts in your backlog.",
		icon: BuildIcon,
		sideAnimation: "right",
		animationDuration: 1,
	},
	{
		title: "Prioritize",
		description:
			"Discover what is high priority by learning what users and employees vote most",
		icon: FormatListNumberedIcon,
		sideAnimation: "left",
		animationDuration: 1.4,
	},
	{
		title: "Boost Employee Engagement",
		description:
			"Give everyone the chance to voice ideas -- reduce silos and remote work isolation.",
		icon: SentimentVerySatisfiedIcon,
		sideAnimation: "right",
		animationDuration: 1.4,
	},
	{
		title: "Work On What Matters",
		description:
			"Ensure developers are spending their time on features that are well vetted.",
		icon: ShowChartIcon,
		sideAnimation: "left",
		animationDuration: 1.9,
	},
	{
		title: "Improve Customer Satisfaction",
		description: "Learn what your users really need and react with confidence.",
		icon: StarRateIcon,
		sideAnimation: "right",
		animationDuration: 1.9,
	},
];

export const factsData = [
	{
		title: "Ideate",
		icon: IconIdea,
		description: "Discover Fresh New Ideas From Other Perspectives.",
	},
	{
		title: "Collaborate",
		icon: IconTarget,
		description: "Come Together In One Place To Discuss And Solve Issues",
	},
	{
		title: "Communicate",
		icon: IconNotes,
		description: "Discuss In A Central Place And Break Down Silos.",
	},
];
