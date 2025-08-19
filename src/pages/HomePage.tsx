import Label from "../components/Label";
import ProductImageGallery from "../components/ProductImageGallery";
import UserList from "../components/UserList";
import { User } from "../entities";

const HomePage = () => {
  const users: User[] = [
    { id: 1, name: "Ahsan" },
    { id: 2, name: "Zara" },
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <Label labelId="welcome" />

      <UserList users={users} />
      {/* provide a small set of valid image URLs */}
      <ProductImageGallery
        imageUrls={[
          "https://placehold.co/300?text=Product+1",
          "https://placehold.co/300?text=Product+2",
        ]}
      />
    </div>
  );
};

export default HomePage;
