// In Next.js, (.) is used to define intercepted routes. Intercepted routes allow you to render a component in a different part of the page while keeping the URL in sync with the main route. In this case, the (.) is used to define an intercepted route for displaying an image in a modal dialog.
// The @modal folder is used to define a parallel route for the modal dialog. The modal dialog is rendered in a different part of the page, but the URL is still in sync with the main route. This allows you to display the image in a modal dialog without changing the URL of the main route.
"use client";

import { DUMMY_NEWS } from "@/mocks/dummyNews";
import { notFound, useRouter } from "next/navigation";

export default async function InterceptedImagePage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { slug } = await params;
  const newsItems = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  if (!newsItems) {
    notFound();
  }

  return (
    <>
      <h2>Intercepted Image</h2>
      <div className="modal-backdrop" onClick={router.back}>
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <img src={`/images/news/${newsItems?.image}`} alt={newsItems?.title} />
          </div>
        </dialog>
      </div>

    </>
  )
}