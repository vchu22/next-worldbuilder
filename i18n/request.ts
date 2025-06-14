import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
    const locale = (await cookies()).get("NEXT_WORLDBUILDER_LOCALE")?.value || "en-us";

    return {
        locale,
        messages: (await import(`@/messages/${locale}.json`)).default,
    }
})