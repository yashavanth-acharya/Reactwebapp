import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "#fff",
				textAlign: "center",
				marginTop: "-50px" }}>
	GOVERNMENT POLYTECHNIC, KAUP BELAPU
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Our College</FooterLink>
			<FooterLink href="#">Vision-Mission</FooterLink>
		</Column>
		<Column>
			<Heading>Department</Heading>
			<FooterLink href="#">Computer Science and engg</FooterLink>
			<FooterLink href="#">Electonics and Communication</FooterLink>
			<FooterLink href="#">Civil Engg</FooterLink>
			<FooterLink href="#">Mechanical Engg</FooterLink>
		</Column>
        <Column>
			<Heading>Facilities</Heading>

			<FooterLink href="#">Library</FooterLink>
			<FooterLink href="#">Laboratory And Workshop </FooterLink>
			<FooterLink href="#">Hostel</FooterLink>
			<FooterLink href="#">Conference Hall </FooterLink>
			<FooterLink href="#">Canteen</FooterLink>
			<FooterLink href="#">Parking</FooterLink>

		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Contact</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
