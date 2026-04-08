// Simulates a JSON file database using localStorage for persistence

export interface ContactEntry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

const DB_KEY = "app_json_db";

function getDB(): { contacts: ContactEntry[] } {
  const raw = localStorage.getItem(DB_KEY);
  if (!raw) return { contacts: [] };
  return JSON.parse(raw);
}

function saveDB(db: { contacts: ContactEntry[] }) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

// POST - save contact
export function postContact(data: Omit<ContactEntry, "id" | "createdAt">): ContactEntry {
  const db = getDB();
  const entry: ContactEntry = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  db.contacts.push(entry);
  saveDB(db);
  return entry;
}

// GET - fetch all contacts
export function getContacts(): ContactEntry[] {
  return getDB().contacts;
}

// DELETE
export function deleteContact(id: string) {
  const db = getDB();
  db.contacts = db.contacts.filter(c => c.id !== id);
  saveDB(db);
}
