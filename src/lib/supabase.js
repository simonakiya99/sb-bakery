import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase

if (supabaseUrl && supabaseAnonKey) {
	supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
	// Graceful fallback for environments where Supabase keys are not set
	// Prevents runtime crash in the browser when visiting the public site
	// Features that require Supabase will silently return null data / no-op
	// and a console warning will help during debugging.
	// NOTE: For full functionality, set `VITE_SUPABASE_URL` and
	// `VITE_SUPABASE_ANON_KEY` in your deployment environment (Vercel/Netlify).
	// Create a minimal mock API with common methods used by the app.
	console.warn('Supabase env vars missing: VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY')
	const noopResult = () => Promise.resolve({ data: null, error: null })
	const chainable = () => ({ then: () => Promise.resolve({ data: null, error: null }) })

	const mockFrom = () => ({
		select: noopResult,
		insert: noopResult,
		update: noopResult,
		delete: noopResult,
		eq: () => ({ select: noopResult }),
		range: () => ({ select: noopResult }),
		order: () => ({ select: noopResult }),
		limit: () => ({ select: noopResult }),
		or: () => ({ select: noopResult }),
	})

	supabase = {
		from: mockFrom,
		auth: {
			signIn: noopResult,
			signUp: noopResult,
			signOut: noopResult,
			user: () => null,
		},
		// allow other code to call supabase.* without throwing
		rpc: noopResult,
	}
}

export { supabase }
