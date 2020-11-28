--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Ubuntu 12.5-1.pgdg16.04+1)
-- Dumped by pg_dump version 13.1

-- Started on 2020-11-28 22:26:42 EET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 5789766)
-- Name: auth_group; Type: TABLE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO enrxyfggwpzgle;

--
-- TOC entry 208 (class 1259 OID 5789764)
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO enrxyfggwpzgle;

--
-- TOC entry 4015 (class 0 OID 0)
-- Dependencies: 208
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: enrxyfggwpzgle
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- TOC entry 211 (class 1259 OID 5789776)
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO enrxyfggwpzgle;

--
-- TOC entry 210 (class 1259 OID 5789774)
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO enrxyfggwpzgle;

--
-- TOC entry 4016 (class 0 OID 0)
-- Dependencies: 210
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: enrxyfggwpzgle
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- TOC entry 207 (class 1259 OID 5789758)
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO enrxyfggwpzgle;

--
-- TOC entry 206 (class 1259 OID 5789756)
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO enrxyfggwpzgle;

--
-- TOC entry 4017 (class 0 OID 0)
-- Dependencies: 206
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: enrxyfggwpzgle
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- TOC entry 213 (class 1259 OID 5789784)
-- Name: auth_user; Type: TABLE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE TABLE public.auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    first_name character varying(150) NOT NULL,
    last_name character varying(150) NOT NULL,
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);


ALTER TABLE public.auth_user OWNER TO enrxyfggwpzgle;

--
-- TOC entry 215 (class 1259 OID 5789794)
-- Name: auth_user_groups; Type: TABLE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE TABLE public.auth_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.auth_user_groups OWNER TO enrxyfggwpzgle;

--
-- TOC entry 214 (class 1259 OID 5789792)
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE SEQUENCE public.auth_user_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_groups_id_seq OWNER TO enrxyfggwpzgle;

--
-- TOC entry 4018 (class 0 OID 0)
-- Dependencies: 214
-- Name: auth_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: enrxyfggwpzgle
--

ALTER SEQUENCE public.auth_user_groups_id_seq OWNED BY public.auth_user_groups.id;


--
-- TOC entry 212 (class 1259 OID 5789782)
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE SEQUENCE public.auth_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_id_seq OWNER TO enrxyfggwpzgle;

--
-- TOC entry 4019 (class 0 OID 0)
-- Dependencies: 212
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: enrxyfggwpzgle
--

ALTER SEQUENCE public.auth_user_id_seq OWNED BY public.auth_user.id;


--
-- TOC entry 217 (class 1259 OID 5789802)
-- Name: auth_user_user_permissions; Type: TABLE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE TABLE public.auth_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_user_user_permissions OWNER TO enrxyfggwpzgle;

--
-- TOC entry 216 (class 1259 OID 5789800)
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE SEQUENCE public.auth_user_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_user_permissions_id_seq OWNER TO enrxyfggwpzgle;

--
-- TOC entry 4020 (class 0 OID 0)
-- Dependencies: 216
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: enrxyfggwpzgle
--

ALTER SEQUENCE public.auth_user_user_permissions_id_seq OWNED BY public.auth_user_user_permissions.id;


--
-- TOC entry 219 (class 1259 OID 5789862)
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO enrxyfggwpzgle;

--
-- TOC entry 218 (class 1259 OID 5789860)
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO enrxyfggwpzgle;

--
-- TOC entry 4021 (class 0 OID 0)
-- Dependencies: 218
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: enrxyfggwpzgle
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- TOC entry 205 (class 1259 OID 5789748)
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO enrxyfggwpzgle;

--
-- TOC entry 204 (class 1259 OID 5789746)
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO enrxyfggwpzgle;

--
-- TOC entry 4022 (class 0 OID 0)
-- Dependencies: 204
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: enrxyfggwpzgle
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- TOC entry 203 (class 1259 OID 5789737)
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO enrxyfggwpzgle;

--
-- TOC entry 202 (class 1259 OID 5789735)
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE SEQUENCE public.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO enrxyfggwpzgle;

--
-- TOC entry 4023 (class 0 OID 0)
-- Dependencies: 202
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: enrxyfggwpzgle
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- TOC entry 225 (class 1259 OID 5789950)
-- Name: django_session; Type: TABLE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO enrxyfggwpzgle;

--
-- TOC entry 224 (class 1259 OID 5789921)
-- Name: events_comment; Type: TABLE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE TABLE public.events_comment (
    id integer NOT NULL,
    comment_text character varying(200),
    pub_date timestamp with time zone NOT NULL,
    author_id character varying(254),
    event_id integer
);


ALTER TABLE public.events_comment OWNER TO enrxyfggwpzgle;

--
-- TOC entry 223 (class 1259 OID 5789919)
-- Name: events_comment_id_seq; Type: SEQUENCE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE SEQUENCE public.events_comment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_comment_id_seq OWNER TO enrxyfggwpzgle;

--
-- TOC entry 4024 (class 0 OID 0)
-- Dependencies: 223
-- Name: events_comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: enrxyfggwpzgle
--

ALTER SEQUENCE public.events_comment_id_seq OWNED BY public.events_comment.id;


--
-- TOC entry 222 (class 1259 OID 5789910)
-- Name: events_event; Type: TABLE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE TABLE public.events_event (
    id integer NOT NULL,
    event_name character varying(30),
    event_description text,
    event_photo character varying(100),
    event_date timestamp with time zone,
    event_rating double precision
);


ALTER TABLE public.events_event OWNER TO enrxyfggwpzgle;

--
-- TOC entry 221 (class 1259 OID 5789908)
-- Name: events_event_id_seq; Type: SEQUENCE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE SEQUENCE public.events_event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_event_id_seq OWNER TO enrxyfggwpzgle;

--
-- TOC entry 4025 (class 0 OID 0)
-- Dependencies: 221
-- Name: events_event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: enrxyfggwpzgle
--

ALTER SEQUENCE public.events_event_id_seq OWNED BY public.events_event.id;


--
-- TOC entry 220 (class 1259 OID 5789895)
-- Name: logreg_user; Type: TABLE; Schema: public; Owner: enrxyfggwpzgle
--

CREATE TABLE public.logreg_user (
    first_name character varying(30),
    last_name character varying(30),
    password character varying(30),
    email character varying(254) NOT NULL,
    birth_date date,
    family_status integer,
    organizer boolean,
    sex integer,
    city character varying(30),
    pets character varying(80) NOT NULL
);


ALTER TABLE public.logreg_user OWNER TO enrxyfggwpzgle;

--
-- TOC entry 3779 (class 2604 OID 5789769)
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- TOC entry 3780 (class 2604 OID 5789779)
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- TOC entry 3778 (class 2604 OID 5789761)
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- TOC entry 3781 (class 2604 OID 5789787)
-- Name: auth_user id; Type: DEFAULT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_user ALTER COLUMN id SET DEFAULT nextval('public.auth_user_id_seq'::regclass);


--
-- TOC entry 3782 (class 2604 OID 5789797)
-- Name: auth_user_groups id; Type: DEFAULT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_user_groups ALTER COLUMN id SET DEFAULT nextval('public.auth_user_groups_id_seq'::regclass);


--
-- TOC entry 3783 (class 2604 OID 5789805)
-- Name: auth_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_user_user_permissions_id_seq'::regclass);


--
-- TOC entry 3784 (class 2604 OID 5789865)
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- TOC entry 3777 (class 2604 OID 5789751)
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- TOC entry 3776 (class 2604 OID 5789740)
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- TOC entry 3787 (class 2604 OID 5789924)
-- Name: events_comment id; Type: DEFAULT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.events_comment ALTER COLUMN id SET DEFAULT nextval('public.events_comment_id_seq'::regclass);


--
-- TOC entry 3786 (class 2604 OID 5789913)
-- Name: events_event id; Type: DEFAULT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.events_event ALTER COLUMN id SET DEFAULT nextval('public.events_event_id_seq'::regclass);


--
-- TOC entry 3991 (class 0 OID 5789766)
-- Dependencies: 209
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: enrxyfggwpzgle
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- TOC entry 3993 (class 0 OID 5789776)
-- Dependencies: 211
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: enrxyfggwpzgle
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- TOC entry 3989 (class 0 OID 5789758)
-- Dependencies: 207
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: enrxyfggwpzgle
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can view log entry	1	view_logentry
5	Can add permission	2	add_permission
6	Can change permission	2	change_permission
7	Can delete permission	2	delete_permission
8	Can view permission	2	view_permission
9	Can add group	3	add_group
10	Can change group	3	change_group
11	Can delete group	3	delete_group
12	Can view group	3	view_group
13	Can add user	4	add_user
14	Can change user	4	change_user
15	Can delete user	4	delete_user
16	Can view user	4	view_user
17	Can add content type	5	add_contenttype
18	Can change content type	5	change_contenttype
19	Can delete content type	5	delete_contenttype
20	Can view content type	5	view_contenttype
21	Can add session	6	add_session
22	Can change session	6	change_session
23	Can delete session	6	delete_session
24	Can view session	6	view_session
25	Can add User	7	add_user
26	Can change User	7	change_user
27	Can delete User	7	delete_user
28	Can view User	7	view_user
29	Can add event	8	add_event
30	Can change event	8	change_event
31	Can delete event	8	delete_event
32	Can view event	8	view_event
33	Can add comment	9	add_comment
34	Can change comment	9	change_comment
35	Can delete comment	9	delete_comment
36	Can view comment	9	view_comment
\.


--
-- TOC entry 3995 (class 0 OID 5789784)
-- Dependencies: 213
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: enrxyfggwpzgle
--

COPY public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
\.


--
-- TOC entry 3997 (class 0 OID 5789794)
-- Dependencies: 215
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: public; Owner: enrxyfggwpzgle
--

COPY public.auth_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- TOC entry 3999 (class 0 OID 5789802)
-- Dependencies: 217
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: enrxyfggwpzgle
--

COPY public.auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- TOC entry 4001 (class 0 OID 5789862)
-- Dependencies: 219
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: enrxyfggwpzgle
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
\.


--
-- TOC entry 3987 (class 0 OID 5789748)
-- Dependencies: 205
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: enrxyfggwpzgle
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	auth	user
5	contenttypes	contenttype
6	sessions	session
7	logreg	user
8	events	event
9	events	comment
\.


--
-- TOC entry 3985 (class 0 OID 5789737)
-- Dependencies: 203
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: enrxyfggwpzgle
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2020-11-28 19:10:38.014094+00
2	auth	0001_initial	2020-11-28 19:10:39.873606+00
3	admin	0001_initial	2020-11-28 19:10:44.540358+00
4	admin	0002_logentry_remove_auto_add	2020-11-28 19:10:45.80214+00
5	admin	0003_logentry_add_action_flag_choices	2020-11-28 19:10:46.506338+00
6	contenttypes	0002_remove_content_type_name	2020-11-28 19:10:47.426792+00
7	auth	0002_alter_permission_name_max_length	2020-11-28 19:10:48.178753+00
8	auth	0003_alter_user_email_max_length	2020-11-28 19:10:49.090106+00
9	auth	0004_alter_user_username_opts	2020-11-28 19:10:49.894004+00
10	auth	0005_alter_user_last_login_null	2020-11-28 19:10:50.856799+00
11	auth	0006_require_contenttypes_0002	2020-11-28 19:10:51.413929+00
12	auth	0007_alter_validators_add_error_messages	2020-11-28 19:10:52.265642+00
13	auth	0008_alter_user_username_max_length	2020-11-28 19:10:53.449046+00
14	auth	0009_alter_user_last_name_max_length	2020-11-28 19:10:54.418339+00
15	auth	0010_alter_group_name_max_length	2020-11-28 19:10:55.413283+00
16	auth	0011_update_proxy_permissions	2020-11-28 19:10:56.110373+00
17	auth	0012_alter_user_first_name_max_length	2020-11-28 19:10:57.294012+00
18	logreg	0001_initial	2020-11-28 19:10:58.465159+00
19	logreg	0002_auto_20201111_1254	2020-11-28 19:10:59.760954+00
20	logreg	0003_auto_20201114_1151	2020-11-28 19:11:01.714045+00
21	logreg	0004_auto_20201114_2127	2020-11-28 19:11:04.407431+00
22	logreg	0005_auto_20201116_2346	2020-11-28 19:11:05.685303+00
23	logreg	0006_auto_20201117_0128	2020-11-28 19:11:06.863041+00
24	events	0001_initial	2020-11-28 19:11:07.82563+00
25	events	0002_auto_20201114_2127	2020-11-28 19:11:08.602174+00
26	events	0003_comment	2020-11-28 19:11:09.421843+00
27	events	0004_auto_20201117_0128	2020-11-28 19:11:13.227612+00
28	events	0005_event_event_rating	2020-11-28 19:11:14.049061+00
29	logreg	0007_user_rating	2020-11-28 19:11:15.082031+00
30	logreg	0008_auto_20201125_2242	2020-11-28 19:11:16.098781+00
31	logreg	0009_remove_user_user_rating	2020-11-28 19:11:17.10085+00
32	sessions	0001_initial	2020-11-28 19:11:18.072181+00
33	logreg	0010_auto_20201128_2223	2020-11-28 20:25:02.855163+00
\.


--
-- TOC entry 4007 (class 0 OID 5789950)
-- Dependencies: 225
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: enrxyfggwpzgle
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
\.


--
-- TOC entry 4006 (class 0 OID 5789921)
-- Dependencies: 224
-- Data for Name: events_comment; Type: TABLE DATA; Schema: public; Owner: enrxyfggwpzgle
--

COPY public.events_comment (id, comment_text, pub_date, author_id, event_id) FROM stdin;
\.


--
-- TOC entry 4004 (class 0 OID 5789910)
-- Dependencies: 222
-- Data for Name: events_event; Type: TABLE DATA; Schema: public; Owner: enrxyfggwpzgle
--

COPY public.events_event (id, event_name, event_description, event_photo, event_date, event_rating) FROM stdin;
\.


--
-- TOC entry 4002 (class 0 OID 5789895)
-- Dependencies: 220
-- Data for Name: logreg_user; Type: TABLE DATA; Schema: public; Owner: enrxyfggwpzgle
--

COPY public.logreg_user (first_name, last_name, password, email, birth_date, family_status, organizer, sex, city, pets) FROM stdin;
Tara1sTESTPUTMETHOD	Vilinsky1i	121345	taras4@taras.com	\N	0	f	1	\N	
Tara1sTESTPUTMETHOD	Vilinsky1i	121345	taras2@taras.com	\N	0	f	1	\N	
Tara1sTESTPUTMETHOD	Vilinsky1i	121345	taras3@taras.com	\N	0	f	1	\N	
Taras	Vilinskyi	12345	taras1@taras.com	\N	1	f	1	\N	
\.


--
-- TOC entry 4026 (class 0 OID 0)
-- Dependencies: 208
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: enrxyfggwpzgle
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- TOC entry 4027 (class 0 OID 0)
-- Dependencies: 210
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: enrxyfggwpzgle
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- TOC entry 4028 (class 0 OID 0)
-- Dependencies: 206
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: enrxyfggwpzgle
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 36, true);


--
-- TOC entry 4029 (class 0 OID 0)
-- Dependencies: 214
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: enrxyfggwpzgle
--

SELECT pg_catalog.setval('public.auth_user_groups_id_seq', 1, false);


--
-- TOC entry 4030 (class 0 OID 0)
-- Dependencies: 212
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: enrxyfggwpzgle
--

SELECT pg_catalog.setval('public.auth_user_id_seq', 1, false);


--
-- TOC entry 4031 (class 0 OID 0)
-- Dependencies: 216
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: enrxyfggwpzgle
--

SELECT pg_catalog.setval('public.auth_user_user_permissions_id_seq', 1, false);


--
-- TOC entry 4032 (class 0 OID 0)
-- Dependencies: 218
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: enrxyfggwpzgle
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 1, false);


--
-- TOC entry 4033 (class 0 OID 0)
-- Dependencies: 204
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: enrxyfggwpzgle
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 9, true);


--
-- TOC entry 4034 (class 0 OID 0)
-- Dependencies: 202
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: enrxyfggwpzgle
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 33, true);


--
-- TOC entry 4035 (class 0 OID 0)
-- Dependencies: 223
-- Name: events_comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: enrxyfggwpzgle
--

SELECT pg_catalog.setval('public.events_comment_id_seq', 1, false);


--
-- TOC entry 4036 (class 0 OID 0)
-- Dependencies: 221
-- Name: events_event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: enrxyfggwpzgle
--

SELECT pg_catalog.setval('public.events_event_id_seq', 1, false);


--
-- TOC entry 3801 (class 2606 OID 5789891)
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- TOC entry 3806 (class 2606 OID 5789818)
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- TOC entry 3809 (class 2606 OID 5789781)
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- TOC entry 3803 (class 2606 OID 5789771)
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- TOC entry 3796 (class 2606 OID 5789809)
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- TOC entry 3798 (class 2606 OID 5789763)
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- TOC entry 3817 (class 2606 OID 5789799)
-- Name: auth_user_groups auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- TOC entry 3820 (class 2606 OID 5789833)
-- Name: auth_user_groups auth_user_groups_user_id_group_id_94350c0c_uniq; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq UNIQUE (user_id, group_id);


--
-- TOC entry 3811 (class 2606 OID 5789789)
-- Name: auth_user auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- TOC entry 3823 (class 2606 OID 5789807)
-- Name: auth_user_user_permissions auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- TOC entry 3826 (class 2606 OID 5789847)
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_permission_id_14a6b632_uniq; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq UNIQUE (user_id, permission_id);


--
-- TOC entry 3814 (class 2606 OID 5789885)
-- Name: auth_user auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


--
-- TOC entry 3829 (class 2606 OID 5789871)
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- TOC entry 3791 (class 2606 OID 5789755)
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- TOC entry 3793 (class 2606 OID 5789753)
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3789 (class 2606 OID 5789745)
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 3845 (class 2606 OID 5789957)
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- TOC entry 3842 (class 2606 OID 5789926)
-- Name: events_comment events_comment_pkey; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.events_comment
    ADD CONSTRAINT events_comment_pkey PRIMARY KEY (id);


--
-- TOC entry 3837 (class 2606 OID 5789918)
-- Name: events_event events_event_pkey; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.events_event
    ADD CONSTRAINT events_event_pkey PRIMARY KEY (id);


--
-- TOC entry 3833 (class 2606 OID 5789904)
-- Name: logreg_user logreg_user_email_682fe053_pk; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.logreg_user
    ADD CONSTRAINT logreg_user_email_682fe053_pk PRIMARY KEY (email);


--
-- TOC entry 3835 (class 2606 OID 5789902)
-- Name: logreg_user logreg_user_email_682fe053_uniq; Type: CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.logreg_user
    ADD CONSTRAINT logreg_user_email_682fe053_uniq UNIQUE (email);


--
-- TOC entry 3799 (class 1259 OID 5789892)
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: enrxyfggwpzgle
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- TOC entry 3804 (class 1259 OID 5789829)
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: enrxyfggwpzgle
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- TOC entry 3807 (class 1259 OID 5789830)
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: enrxyfggwpzgle
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- TOC entry 3794 (class 1259 OID 5789815)
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: enrxyfggwpzgle
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- TOC entry 3815 (class 1259 OID 5789845)
-- Name: auth_user_groups_group_id_97559544; Type: INDEX; Schema: public; Owner: enrxyfggwpzgle
--

CREATE INDEX auth_user_groups_group_id_97559544 ON public.auth_user_groups USING btree (group_id);


--
-- TOC entry 3818 (class 1259 OID 5789844)
-- Name: auth_user_groups_user_id_6a12ed8b; Type: INDEX; Schema: public; Owner: enrxyfggwpzgle
--

CREATE INDEX auth_user_groups_user_id_6a12ed8b ON public.auth_user_groups USING btree (user_id);


--
-- TOC entry 3821 (class 1259 OID 5789859)
-- Name: auth_user_user_permissions_permission_id_1fbb5f2c; Type: INDEX; Schema: public; Owner: enrxyfggwpzgle
--

CREATE INDEX auth_user_user_permissions_permission_id_1fbb5f2c ON public.auth_user_user_permissions USING btree (permission_id);


--
-- TOC entry 3824 (class 1259 OID 5789858)
-- Name: auth_user_user_permissions_user_id_a95ead1b; Type: INDEX; Schema: public; Owner: enrxyfggwpzgle
--

CREATE INDEX auth_user_user_permissions_user_id_a95ead1b ON public.auth_user_user_permissions USING btree (user_id);


--
-- TOC entry 3812 (class 1259 OID 5789886)
-- Name: auth_user_username_6821ab7c_like; Type: INDEX; Schema: public; Owner: enrxyfggwpzgle
--

CREATE INDEX auth_user_username_6821ab7c_like ON public.auth_user USING btree (username varchar_pattern_ops);


--
-- TOC entry 3827 (class 1259 OID 5789882)
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: enrxyfggwpzgle
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- TOC entry 3830 (class 1259 OID 5789883)
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: enrxyfggwpzgle
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- TOC entry 3843 (class 1259 OID 5789959)
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: enrxyfggwpzgle
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- TOC entry 3846 (class 1259 OID 5789958)
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: enrxyfggwpzgle
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- TOC entry 3838 (class 1259 OID 5789937)
-- Name: events_comment_author_id_929692ac; Type: INDEX; Schema: public; Owner: enrxyfggwpzgle
--

CREATE INDEX events_comment_author_id_929692ac ON public.events_comment USING btree (author_id);


--
-- TOC entry 3839 (class 1259 OID 5789938)
-- Name: events_comment_author_id_929692ac_like; Type: INDEX; Schema: public; Owner: enrxyfggwpzgle
--

CREATE INDEX events_comment_author_id_929692ac_like ON public.events_comment USING btree (author_id varchar_pattern_ops);


--
-- TOC entry 3840 (class 1259 OID 5789939)
-- Name: events_comment_event_id_ac477c38; Type: INDEX; Schema: public; Owner: enrxyfggwpzgle
--

CREATE INDEX events_comment_event_id_ac477c38 ON public.events_comment USING btree (event_id);


--
-- TOC entry 3831 (class 1259 OID 5789905)
-- Name: logreg_user_email_682fe053_like; Type: INDEX; Schema: public; Owner: enrxyfggwpzgle
--

CREATE INDEX logreg_user_email_682fe053_like ON public.logreg_user USING btree (email varchar_pattern_ops);


--
-- TOC entry 3849 (class 2606 OID 5789824)
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3848 (class 2606 OID 5789819)
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3847 (class 2606 OID 5789810)
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3851 (class 2606 OID 5789839)
-- Name: auth_user_groups auth_user_groups_group_id_97559544_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3850 (class 2606 OID 5789834)
-- Name: auth_user_groups auth_user_groups_user_id_6a12ed8b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3853 (class 2606 OID 5789853)
-- Name: auth_user_user_permissions auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3852 (class 2606 OID 5789848)
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3854 (class 2606 OID 5789872)
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3855 (class 2606 OID 5789877)
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3856 (class 2606 OID 5789940)
-- Name: events_comment events_comment_author_id_929692ac_fk_logreg_user_email; Type: FK CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.events_comment
    ADD CONSTRAINT events_comment_author_id_929692ac_fk_logreg_user_email FOREIGN KEY (author_id) REFERENCES public.logreg_user(email) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3857 (class 2606 OID 5789945)
-- Name: events_comment events_comment_event_id_ac477c38_fk_events_event_id; Type: FK CONSTRAINT; Schema: public; Owner: enrxyfggwpzgle
--

ALTER TABLE ONLY public.events_comment
    ADD CONSTRAINT events_comment_event_id_ac477c38_fk_events_event_id FOREIGN KEY (event_id) REFERENCES public.events_event(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4013 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: enrxyfggwpzgle
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO enrxyfggwpzgle;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- TOC entry 4014 (class 0 OID 0)
-- Dependencies: 699
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO enrxyfggwpzgle;


-- Completed on 2020-11-28 22:27:22 EET

--
-- PostgreSQL database dump complete
--

