import Link from "next/link";
import Image from "next/image";
import Img1 from "@/app/certs.jpg";
import Img2 from "@/app/permits.jpg";

export default function Home() {
  return (
    <div>
      <div className="content">
        <p
          style={{
            fontSize: 90,
            fontFamily: "Georgia",
          }}
        >
          Welcome to CitizEntry
        </p>
        <p
          style={{
            fontSize: 55,
            fontFamily: "monospace",
          }}
        >
          Always available at your service
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="info-class">
          <p
            style={{
              color: "white",
              fontSize: 43,
              fontFamily: "Geneva",
              marginBottom: 20,
              fontWeight: 700,
            }}
          >
            Your City Services, All in One Place
          </p>
          <p
            style={{
              color: "white",
              fontSize: 29,
              fontFamily: "Cambria",
              marginBottom: 25,
            }}
          >
            Access government services, pay bills, request documents and stay
            informed about your community through our secure citizen portal.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Link className="get-started" href="/">
              Get Started
            </Link>
            <Link className="learn-more" href="/">
              Learn More
            </Link>
          </div>
        </div>
        <div className="card1">
          <p
            style={{
              color: "black",
              textAlign: "center",
              fontSize: 25,
              fontWeight: 600,
              marginBottom: 22,
            }}
          >
            Quick Access
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 20,
            }}
          >
            <div className="permit">
              <Link href="/permits">
                <Image src={Img2} alt="permit-icon" />
              </Link>
            </div>
            <div className="certificate">
              <Link href="/certz">
                <Image src={Img1} alt="certificate-icon" />
              </Link>
            </div>
          </div>
          <p
            style={{
              color: "black",
              fontSize: 20,
              marginLeft: 48,
              fontWeight: 600,
            }}
          >
            Permits
          </p>
          <p
            style={{
              color: "black",
              fontSize: 20,
              marginLeft: 190,
              marginTop: -28,
              fontWeight: 600,
            }}
          >
            Certificates
          </p>
        </div>
      </div>
      <div className="content2">
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 35,
            marginBottom: 10,
            fontWeight: 700,
          }}
        >
          Essential services
        </p>
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 20,
            marginBottom: 10,
          }}
        >
          Access a wide range of government services designed to make your Life
          easier and more connected.
        </p>
        <div className="services-container">
          <div className="service">
            <p
              style={{
                color: "white",
                fontSize: 23,
                marginLeft: 20,
                marginBottom: 10,
                fontWeight: 700,
              }}
            >
              Municipal Services
            </p>
            <p
              style={{
                color: "white",
                fontSize: 18,
                marginLeft: 20,
                marginBottom: 30,
              }}
            >
              Access property information, permits, zoning details and other
              Municipal services.
            </p>
            <Link className="learn-more" href="/">
              Learn More
            </Link>
          </div>
          <div className="service">
            <p
              style={{
                color: "white",
                fontSize: 23,
                marginLeft: 20,
                marginBottom: 10,
                fontWeight: 700,
              }}
            >
              Document Requests
            </p>
            <p
              style={{
                color: "white",
                fontSize: 18,
                marginLeft: 20,
                marginBottom: 55,
              }}
            >
              Request and Download official documents, certificates & records
              securely.
            </p>
            <Link className="learn-more" href="/">
              Learn More
            </Link>
          </div>
          <div className="service">
            <p
              style={{
                color: "white",
                fontSize: 23,
                marginLeft: 20,
                marginBottom: 10,
                fontWeight: 700,
              }}
            >
              Online Payments
            </p>
            <p
              style={{
                color: "white",
                fontSize: 18,
                marginLeft: 20,
                marginBottom: 55,
              }}
            >
              Pay utility bills, taxes, fines and other government fees securely
              online.
            </p>
            <Link className="learn-more" href="/">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <p
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 35,
          fontWeight: 700,
          marginBottom: 11,
        }}
      >
        Why Use CitizEntry?
      </p>
      <p
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 20,
          marginBottom: 10,
        }}
      >
        Our platform is designed with citizens in mind, offering convinience and
        accessibility.
      </p>
      <div className="services-container">
        <div className="service2">
          <p
            style={{
              color: "white",
              fontSize: 25,
              marginLeft: 20,
              marginBottom: 10,
              fontWeight: 700,
            }}
          >
            Secure Access
          </p>
          <p
            style={{
              color: "white",
              fontSize: 23,
              marginLeft: 20,
              marginBottom: 30,
              fontFamily: "Georgia",
            }}
          >
            Advanced encryption and authentication to keep your information
            safe.
          </p>
        </div>
        <div className="service2">
          <p
            style={{
              color: "white",
              fontSize: 25,
              marginLeft: 20,
              marginBottom: 10,
              fontWeight: 700,
            }}
          >
            24/7 Availability
          </p>
          <p
            style={{
              color: "white",
              fontSize: 23,
              marginLeft: 20,
              marginBottom: 55,
              fontFamily: "Georgia",
            }}
          >
            Access services anytime, anywhere without waiting in line.
          </p>
        </div>
        <div className="service2">
          <p
            style={{
              color: "white",
              fontSize: 25,
              marginLeft: 20,
              marginBottom: 10,
              fontWeight: 700,
            }}
          >
            Support
          </p>
          <p
            style={{
              color: "white",
              fontSize: 23,
              marginLeft: 20,
              marginBottom: 55,
              fontFamily: "Georgia",
            }}
          >
            Dedicated support team to assist with any questions and issues.
          </p>
        </div>
      </div>
      <div className="content3">
        <p
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 35,
            fontWeight: 700,
            marginBottom: 11,
          }}
        >
          Ready to get Started?
        </p>
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 20,
            marginBottom: 55,
          }}
        >
          Join thousands of citizens who are already enjoying the convinience of
          Digital government services.
        </p>
        <Link className="account-link" href="/register">
          Create an Account
        </Link>
      </div>
    </div>
  );
}
