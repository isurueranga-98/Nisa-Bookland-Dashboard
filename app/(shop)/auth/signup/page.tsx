import { ShopPageContainer } from "@/components/shop/layout/shop-page-container";
import { signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SignUpPage = (): React.JSX.Element => {
  return (
    <ShopPageContainer>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Button type="submit">Signin with Google</Button>
      </form>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Signout</Button>
      </form>
    </ShopPageContainer>
  );
};

export default SignUpPage;
