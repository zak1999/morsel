import useProfile from "@/hooks/useProfile";
import { profileSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Form, useForm } from "react-hook-form";
import z from "zod";

const ProfileForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  // const {} = useProfile();
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      // bio: ,
      // location,
      // name,
      // website,
    },
  });
  return (
    <Form>
      <form></form>
    </Form>
  );
};

export default ProfileForm;
