import { Typography, Container, Box } from "@mui/material";
import Button from "./ui/Button";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <Container maxWidth="lg">
        <Box className="flex flex-col md:flex-row justify-between items-center">
          <Typography variant="body2" color="text.secondary" className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Patrick Rwirangira. All rights reserved.
          </Typography>
          <Box className="flex items-center space-x-4">
            <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-primary hover:text-accent transition-colors" size={24} />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-primary hover:text-accent transition-colors" size={24} />
            </Link>
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-primary hover:text-accent transition-colors" size={24} />
            </Link>
          </Box>
          <Button variant="outline" asChild className="mt-4 md:mt-0">
            <Link href="https://www.buymeacoffee.com/yourusername" target="_blank" rel="noopener noreferrer">
              Buy Me a Coffee
            </Link>
          </Button>
        </Box>
      </Container>
    </footer>
  );
}