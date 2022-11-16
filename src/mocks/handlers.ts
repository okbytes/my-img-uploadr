import { rest } from "msw"
import { images } from "../utils/helpers"

export const handlers = [
	rest.get("/api/images", async (_, res, ctx) => {
		return res(ctx.status(200), ctx.json(images))
	}),
	rest.get("/api/search", async (req, res, ctx) => {
		const searchParams = new URLSearchParams(req.url.search)
		const search = searchParams.get("search") || ""
		if (!search) {
			return res(ctx.status(200), ctx.json([]))
		}
		const matches = images.filter(img =>
			img.name.toLocaleLowerCase().includes(search?.toLocaleLowerCase())
		)
		return res(ctx.status(200), ctx.json(matches))
	}),
	rest.post("/api/upload", async (req, res, ctx) => {
		// @ts-expect-error: deprecated but works for now
		const body = Object.entries(req.body).map(([name, src]) => ({ name, src }))
		images.push(...body)
		return res(ctx.status(200), ctx.json(images))
	}),
]
