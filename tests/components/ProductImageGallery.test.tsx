import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("returns null when imageUrls is empty", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders images and their src attributes", () => {
    const imageUrls = [
      "https://placehold.co/600x400?text=Product+1",
      "https://placehold.co/600x400?text=Product+2",
    ];

    render(<ProductImageGallery imageUrls={imageUrls} />);

    const list = screen.getByRole("list");
    const images = screen.getAllByRole("img");

    expect(list).toBeInTheDocument();
    expect(images).toHaveLength(imageUrls.length);

    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
