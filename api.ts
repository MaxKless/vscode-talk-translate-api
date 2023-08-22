import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(_req: Request) {
  const data = {
    "UI.SIGNIN": "Sign In",
    "UI.SIGNUP": "Sign Up",
    "UI.LOGOUT": "Logout",
    "UI.PROFILE": "Profile",
    "UI.SETTINGS": "Settings",

    "ERRORS.NETWORK": "Network Error",
    "ERRORS.FORBIDDEN": "You don't have permission to access this.",
    "ERRORS.NOT_FOUND": "Resource not found.",
    "ERRORS.INTERNAL_SERVER": "Internal Server Error",

    "MESSAGES.WELCOME": "Welcome to our platform!",
    "MESSAGES.GOODBYE": "Goodbye, see you soon!",
    "MESSAGES.SUCCESS_REGISTRATION": "Registration successful! Please log in.",
    "MESSAGES.PASSWORD_RESET":
      "Password reset link has been sent to your email.",

    "PRODUCTS.ADD_TO_CART": "Add to Cart",
    "PRODUCTS.OUT_OF_STOCK": "Out of Stock",
    "PRODUCTS.DESCRIPTION": "Description",
    "PRODUCTS.REVIEW": "Write a Review",

    "PAYMENT.CHECKOUT": "Checkout",
    "PAYMENT.SUCCESS": "Payment Successful",
    "PAYMENT.FAILURE": "Payment Failed",
    "PAYMENT.CANCEL": "Cancel Transaction",

    "MISC.FOOTER_COPYRIGHT": "Copyright © 2023. All rights reserved.",
    "MISC.TERMS_SERVICE": "Terms of Service",
    "MISC.PRIVACY_POLICY": "Privacy Policy",
  };
  const body = JSON.stringify(data, null, 2);
  return new Response(body, {
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

serve(handler);
