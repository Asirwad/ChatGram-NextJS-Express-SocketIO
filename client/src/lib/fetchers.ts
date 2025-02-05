import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export async function handleSubmit(e:any, router: AppRouterInstance, avatarId: number) {
    e.preventDefault();
    try {
        await fetch("/auth", {
            method: 'POST',
            body: JSON.stringify({
                name: e.target[0].value,
                email: e.target[1].value,
                imageId: avatarId
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        router.push("/chat");
    } catch (error) {
        console.log(error);
    }
}


export async function fetchUser(cookie: { user?: any; },setUser: { (user: any): void; (arg0: any): void; }) {
    const accessToken = cookie.user;
    const response = await fetch("/user", {
      method: "GET",
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    const user = await response.json();
    setUser(user[0]);
}