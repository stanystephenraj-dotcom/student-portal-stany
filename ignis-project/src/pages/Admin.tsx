import { useState, useEffect } from "react";
import { getContacts, deleteContact, type ContactEntry } from "@/lib/db";
import { Trash2, Inbox, RefreshCw } from "lucide-react";

const Admin = () => {
  const [contacts, setContacts] = useState<ContactEntry[]>([]);

  const load = () => setContacts(getContacts());

  useEffect(() => { load(); }, []);

  const handleDelete = (id: string) => {
    deleteContact(id);
    load();
  };

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 animate-slide-up">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              Admin Panel
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold">
              Submitted <span className="text-gradient">Messages</span>
            </h1>
          </div>
          <button
            onClick={load}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-medium hover:bg-muted transition-colors"
          >
            <RefreshCw className="h-4 w-4" /> Refresh
          </button>
        </div>

        {contacts.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <Inbox className="h-16 w-16 text-muted-foreground/40 mx-auto mb-4" />
            <p className="text-muted-foreground">No messages yet. Submit one via the Contact page.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {contacts.map((c, i) => (
              <div
                key={c.id}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow animate-slide-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-heading font-semibold">{c.name}</h3>
                      <span className="text-xs text-muted-foreground">({c.email})</span>
                    </div>
                    <p className="text-sm font-medium text-primary mb-1">{c.subject}</p>
                    <p className="text-sm text-muted-foreground">{c.message}</p>
                    <p className="text-xs text-muted-foreground/60 mt-2">
                      {new Date(c.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(c.id)}
                    className="p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors flex-shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
