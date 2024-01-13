import type { Schema } from "@/type/editor";
import { t } from "@/utils/i18n-utils";

const schema: Schema = {
  type: "template",
  id: "drive",
  icon: "",
  name: t("insert_drive"),
  formKit: [
    {
      $formkit: "select",
      name: "platform",
      label: t("platform"),
      value: "baidu",
      options: {
        baidu: t("baidu_net_disk"),
        ali: t("ali_drive"),
      },
    },
    {
      $formkit: "text",
      name: "title",
      label: t("title"),
      value: "",
    },
    {
      $formkit: "text",
      name: "link",
      label: t("link"),
      value: "",
    },
    {
      $formkit: "text",
      name: "password",
      label: t("password"),
    },
  ],
  template:
    "```halo\ndrive:$platform$\nname:$title$\nlink:$link$\npassword:$password$\n```",
};

export default schema;
